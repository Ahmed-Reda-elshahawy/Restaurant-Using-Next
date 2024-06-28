"use client";

import { useRef, useState } from "react";
import cssClasses from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const imageInput = useRef();
    const [imagePicked, setImagePicked] = useState();

    function handleUpload() {
        imageInput.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) {
            setImagePicked(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setImagePicked(fileReader.result);
        }
    }

    return (
        <div className={cssClasses.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={cssClasses.controls}>
                <div className={cssClasses.preview}>
                    {!imagePicked && <p>No image picked yet.</p>}
                    {imagePicked && <Image src={imagePicked} alt="selected image" fill />}
                </div>
                <input
                    type="file"
                    name={name}
                    id={name}
                    className={cssClasses.input}
                    accept="image/png, image/jpeg"
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button type="button" className={cssClasses.button} onClick={handleUpload}>Pick an image</button>
            </div>
        </div>
    )
}