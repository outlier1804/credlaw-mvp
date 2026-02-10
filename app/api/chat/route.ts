import { NextResponse } from 'next/server';
import { searchKnowledgeBase, generateAgentResponse } from '@/lib/rag-service';

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        // 1. Retrieve Context (RAG)
        const context = await searchKnowledgeBase(message);

        // 2. Generate Response (LLM)
        // For MVP, we simulated the LLM part in the service, but normally you'd call OpenAI here.
        const reply = await generateAgentResponse(message, context);

        // 3. Return
        return NextResponse.json({
            reply,
            sources: context.includes('[Context') ? ['Internal Knowledge Base'] : []
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
