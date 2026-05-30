import subprocess
import sys
import pathlib
import os
import time

def run_cmd(cmd: str, cwd: pathlib.Path) -> subprocess.CompletedProcess:
    """Run a shell command, print its output, and raise on error.
    Args:
        cmd: Command line to execute.
        cwd: Working directory.
    Returns:
        CompletedProcess instance.
    """
    print(f"[INFO] Executing: {cmd} (cwd={cwd})")
    result = subprocess.run(cmd, cwd=str(cwd), shell=True, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout)
    if result.stderr:
        print("[ERROR]", result.stderr, file=sys.stderr)
    result.check_returncode()
    return result

def main() -> None:
    # Base directory – the template folder containing this script
    base_dir = pathlib.Path(__file__).parent.resolve()

    # ------------------------------------------------------------------
    # 1. Ensure project dependencies are installed via pnpm
    # ------------------------------------------------------------------
    print("[STEP 1] Installing dependencies with pnpm...")
    run_cmd("pnpm install", cwd=base_dir)

    # ------------------------------------------------------------------
    # 2. Launch the development server (non‑blocking)
    # ------------------------------------------------------------------
    print("[STEP 2] Starting pnpm dev server (background)...")
    dev_process = subprocess.Popen(
        "pnpm run dev",
        cwd=str(base_dir),
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    # Give the dev server a moment to start before proceeding
    time.sleep(5)
    print(f"[INFO] Dev server started with PID {dev_process.pid}")

    # ------------------------------------------------------------------
    # 3. Run the Gemini CLI to read scripts/ and generate the web output
    # ------------------------------------------------------------------
    print("[STEP 3] Running Gemini CLI to generate the site from scripts/...")
    # "--yes" forces automatic approval of any permission prompts the CLI may emit.
    # Use yolo mode to auto‑approve any permission prompts and skip trust prompts.
    gemini_cmd = "gemini run build -y --skip-trust"
    try:
        run_cmd(gemini_cmd, cwd=base_dir)
    except subprocess.CalledProcessError:
        print("[ERROR] Gemini CLI failed. Terminating dev server and exiting.")
        dev_process.terminate()
        sys.exit(1)

    # ------------------------------------------------------------------
    # 4. Final status
    # ------------------------------------------------------------------
    print("[STEP 4] All steps completed successfully.")
    print(f"Dev server continues to run in the background (PID {dev_process.pid}).")
    # Optionally keep the script alive so the server stays up until the user stops it.
    try:
        dev_process.wait()
    except KeyboardInterrupt:
        print("\n[INFO] Received KeyboardInterrupt – shutting down dev server.")
        dev_process.terminate()

if __name__ == "__main__":
    main()
