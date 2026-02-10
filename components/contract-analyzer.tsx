'use client';

import { useState } from 'react';
import {
    FileText,
    UploadCloud,
    Scan,
    CheckCircle2,
    AlertTriangle,
    Gavel,
    Shield,
    X,
    Loader2
} from "lucide-react"

export function ContractAnalyzer() {
    const [file, setFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState<any>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setAnalysisResult(null); // Reset
        }
    };

    const runAnalysis = () => {
        setIsAnalyzing(true);
        // Simulate AI Processing (3 seconds)
        setTimeout(() => {
            setIsAnalyzing(false);
            setAnalysisResult({
                venue: 'JAMS Arbitration',
                jurisdiction: 'Consumer Friendly (CA)',
                clauses: [
                    { name: 'Binding Arbitration', active: true, risk: 'high' },
                    { name: 'Class Action Waiver', active: true, risk: 'high' },
                    { name: 'Small Claims Option', active: true, risk: 'low' },
                    { name: 'Opt-Out Provision', active: false, risk: 'medium' },
                ]
            });
        }, 3000);
    };

    return (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 text-white shadow-2xl relative overflow-hidden group">

            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-1000"></div>

            <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-2.5 rounded-lg border border-primary/30">
                    <Scan className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">AI Contract & Jurisdiction Scanner</h3>
                    <p className="text-slate-400 text-xs">Upload Cardholder Agreement to detect Venue traps.</p>
                </div>
            </div>

            {!file ? (
                // Upload State
                <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-primary hover:bg-slate-800/50 transition-all cursor-pointer relative">
                    <input
                        type="file"
                        accept=".pdf,.docx"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="h-10 w-10 text-slate-500 mx-auto mb-3" />
                    <p className="font-medium text-sm">Drag & drop or Click to Upload</p>
                    <p className="text-xs text-slate-500 mt-1">Supports PDF (Max 10MB)</p>
                </div>
            ) : !analysisResult ? (
                // File Selected / Analyzing State
                <div className="space-y-4">
                    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg border border-slate-700">
                        <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-blue-400" />
                            <span className="text-sm font-medium">{file.name}</span>
                        </div>
                        <button onClick={() => setFile(null)} className="text-slate-500 hover:text-white">
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <button
                        onClick={runAnalysis}
                        disabled={isAnalyzing}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    >
                        {isAnalyzing ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" /> Scanning Clauses...
                            </>
                        ) : (
                            <>
                                <Scan className="h-4 w-4" /> Run Deep Scan
                            </>
                        )}
                    </button>
                </div>
            ) : (
                // Results State
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <span className="text-xs text-slate-400 uppercase font-bold block mb-1">Venue Detected</span>
                            <div className="flex items-center gap-2 font-bold text-green-400">
                                <Gavel className="h-4 w-4" />
                                {analysisResult.venue}
                            </div>
                        </div>
                        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                            <span className="text-xs text-slate-400 uppercase font-bold block mb-1">Jurisdiction</span>
                            <div className="flex items-center gap-2 font-bold text-blue-400">
                                <Shield className="h-4 w-4" />
                                {analysisResult.jurisdiction}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-400 uppercase">Critical Clauses Found:</p>
                        {analysisResult.clauses.map((clause: any) => (
                            <div key={clause.name} className="flex items-center justify-between text-sm bg-slate-800/50 p-2 rounded border border-slate-700/50">
                                <span className={!clause.active ? 'text-slate-500 line-through' : ''}>
                                    {clause.name}
                                </span>
                                {clause.active ? (
                                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                    <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-300">Not Found</span>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded text-xs text-yellow-200 flex gap-2 items-start">
                            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>
                                <strong>Strategy Tip:</strong> Since "Class Action Waiver" is present, file individual arbitration immediately. Estimated filing fee for consumer: $200 (Recoverable).
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
