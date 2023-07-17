import { toast } from 'react-toastify';

const toastError = (message: string) => {
  toast.error("🐦 Error: " + message, {
		position: "bottom-left",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
	});
}

const toastSuccess = (message: string) => {
  toast.success("🕊️" + message, {
		position: "bottom-left",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
	});
}

const toastInfo = (message: string) => {
  toast.info("🦜" + message, {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
  });
}

export { toastError, toastSuccess, toastInfo };
