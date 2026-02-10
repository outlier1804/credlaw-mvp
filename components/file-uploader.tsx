'use client';

import { useState, useRef } from 'react';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploaderProps {
    onUploadComplete?: (fileName: string) => void;
    label?: string;
    sublabel?: string;
}

export function FileUploader({ onUploadComplete, label = "Click to Upload", sublabel = "Drag & Drop or Select File" }: FileUploaderProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = async (files: FileList) => {
        const file = files[0];
        setUploading(true);
        setUploadProgress(0);

        // Simulate upload progress
        const interval = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setUploading(false);
                    if (onUploadComplete) onUploadComplete(file.name);
                    return 100;
                }
                return prev + 10;
            });
        }, 200);
    };

    return (
        <div
            className={cn(
                "border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all",
                isDragging ? "border-primary bg-primary/5 scale-[1.02]" : "border-border hover:border-primary/50 hover:bg-muted/5",
                uploading ? "pointer-events-none opacity-80" : ""
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
        >
            <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept=".pdf,.jpg,.png,.jpeg"
            />

            {uploading ? (
                <div className="w-full max-w-xs space-y-4">
                    <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <File className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Uploading...</span>
                            <span>{uploadProgress}%</span>
                        </div>
                        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-300 ease-in-out"
                                style={{ width: `${uploadProgress}%` }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className={cn(
                        "h-10 w-10 rounded-full flex items-center justify-center mb-3 transition-colors",
                        isDragging ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    )}>
                        <Upload className="h-5 w-5" />
                    </div>
                    <p className="font-medium text-sm">{label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{sublabel}</p>
                </>
            )}
        </div>
    );
}
