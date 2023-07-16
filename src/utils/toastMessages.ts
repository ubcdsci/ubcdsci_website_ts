import { toast } from 'react-toastify';

const toastError = (message: string) => {
  toast.error("🐦 Error: " + message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
	});
}

const toastSuccess = (message: string) => {
  toast.success("🕊️" + message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
	});
}

const toastInfo = (message: string) => {
  toast.info("🦜" + message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
}

export { toastError, toastSuccess, toastInfo };
