import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { dataURLtoFile } from '../../utils/URLtoFile';
import { uploadImage } from '../../services/user/User';

export default function UploadImageModal({showModal, setShowModal, previewImage, setImage}) {
    const cropperRef = React.createRef();
    const handleClose = () => setShowModal(false);

    const handleCropImage = async () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            const res = await uploadImage(dataURLtoFile(cropperRef.current?.cropper.getCroppedCanvas().toDataURL(), Math.floor((Math.random() * 100) + 1)+ ".jpg"));
console.log('res', res);
            // console.log('cropperRef.current?.cropper.getCroppedCanvas()',cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
            // setImage(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
            handleClose()
        }
    };
    return (
        <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Crop Image</Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body>
                    <div class="row">
                        <div class="col-xl-12">
                            <Cropper
                                ref={cropperRef}
                                style={{ height: 400, width: "100%" }}
                                zoomTo={0.5}
                                initialAspectRatio={1}
                                preview=".img-preview"
                                src={previewImage}
                                viewMode={1}
                                minCropBoxHeight={10}
                                minCropBoxWidth={10}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false}
                                guides={true}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <a href='#' class="edu-btn btn-primary btn-small" onClick={handleCropImage}>Crop</a>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
