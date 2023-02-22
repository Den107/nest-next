import React, {useRef} from 'react';

interface FileUploadProps {
    setFile: Function
    accept: string
    children: React.ReactElement
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input onChange={onChange} ref={ref} type="file" accept={accept} style={{display: 'none'}}/>
            {children}
        </div>
    );
};

export default FileUpload;