export default function LoadingDialog() {
  if (typeof window !== "undefined") {
    let dialog = document.getElementById("loadingDialog");
    if (dialog == null) return <></>;
    dialog.close();
    dialog.showModal();
  }

  return (
    <dialog open id="loadingDialog">
      <h2>We are getting everything ready!</h2>
      <p>Please wait...</p>
    </dialog>
  );
}
