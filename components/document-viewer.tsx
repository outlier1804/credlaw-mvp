'use client';
import {
    FileText,
    X,
    Printer,
    Download,
    Send,
    CheckCircle2,
    Calendar
} from "lucide-react"

// This component will be used to show the "Draft" before sending.
export function DocumentPreviewModal({ isOpen, onClose, content, type }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white text-black w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                    <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="font-bold text-lg">{type || "Document Preview"}</span>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">DRAFT MODE</span>
                    </div>
                    <button onClick={onClose} className="hover:bg-gray-200 p-2 rounded-full transition-colors">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content (The Letter) */}
                <div className="flex-1 overflow-y-auto p-8 font-serif text-sm leading-relaxed whitespace-pre-wrap bg-white">
                    {content}
                </div>

                {/* Footer (Actions) */}
                <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Created: {new Date().toLocaleDateString()}
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 font-medium text-sm transition-colors">
                            <Printer className="h-4 w-4" /> Print
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 font-bold text-sm shadow-lg transition-all">
                            <Send className="h-4 w-4" /> Approve & Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
