import Swal from "sweetalert2";
export const DeleteProduct = async ({ title, id }) => {
  Swal.fire({
    title: `Do you want to delete ${title}`,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Delete",
    denyButtonText: `Cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      //calling API
      Swal.fire("Deleted", "", "success");
    } else if (result.isDenied)
      Swal.fire(`${title} is not deleted`, "", "info");
  });
};
