import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../app/redux/hooks";
import { selectModalMessage, selectModalShow } from "../app/selectors";
import { hideModal } from "../app/redux/reducers/modalSlice";

function ModalWindow() {
    const show = useAppSelector(selectModalShow);
    const message = useAppSelector(selectModalMessage);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(hideModal());
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Hey!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        </Modal>
    );
}

export default ModalWindow;
