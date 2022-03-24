export default function LoadingDialog() {
  if (typeof window !== "undefined") {
    let dialog = document.getElementById("loadingDialog");
    dialog.close();
    dialog.showModal();
  }

  return (
    <dialog open id="loadingDialog">
      <h2>We are looking for the content</h2>
      <p>Please wait...</p>
    </dialog>
  );
}
