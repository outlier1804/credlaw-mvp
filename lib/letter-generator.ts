/**
 * Part 4: System Prompts for the AI & Mailing Integration
 * 
 * This mock generator simulates:
 * 1. Filling a template (Statement of Facts)
 * 2. Sending for e-Signature (DocuSign)
 * 3. Mailing via API (PostGrid/Lob)
 */

export interface LetterGenerationRequest {
    clientName: string;
    violationType: string; // e.g., "Hinkle v. Midland"
    recipient: string; // e.g., "Equifax"
}

export async function generateAndSendLetter(request: LetterGenerationRequest) {
    console.log(`[Letter Generator] Starting workflow for ${request.clientName}...`);

    // Step 1: Logic Gate / Template Selection
    let template = "";
    if (request.violationType.includes("Hinkle")) {
        template = "DEMAND_LETTER_FURNISHER_HINKLE";
    } else if (request.violationType.includes("Norman")) {
        template = "DEMAND_LETTER_CRA_NORMAN";
    } else {
        template = "GENERIC_DISPUTE";
    }

    console.log(`[Letter Generator] Selected Template: ${template}`);

    // Step 2: "AI Drafting" (Mock Delay)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(`[Letter Generator] PDF Generated.`);

    // Step 3: "DocuSign" Request
    console.log(`[Letter Generator] Sending e-signature request to client...`);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        success: true,
        status: 'SENT_TO_CLIENT_FOR_SIGNATURE',
        envelopeId: 'DS-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
}
