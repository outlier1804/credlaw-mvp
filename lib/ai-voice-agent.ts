/**
 * Part 2 (Client Dashboard): AI Voice Agent (The "Reminder Bot")
 * Tech: Retell AI or Twilio Voice
 * Trigger: 3 days before dispute window ends.
 */

export interface VoiceAgentConfig {
    enabled: boolean;
    phoneNumber: string;
    preferredTime: string;
}

export async function checkAndTriggerVoiceReminder(
    clientName: string,
    disputeDate: Date,
    daysWindow: number = 30
) {
    const now = new Date();
    const deadline = new Date(disputeDate.getTime() + daysWindow * 24 * 60 * 60 * 1000);
    const daysRemaining = (deadline.getTime() - now.getTime()) / (1000 * 3600 * 24);

    // Trigger: 3 days before dispute window ends
    if (daysRemaining <= 3 && daysRemaining > 0) {
        console.log(`[AI Voice Agent] Triggering call for ${clientName}. Days remaining: ${daysRemaining.toFixed(1)}`);

        // In a real implementation, this would call Retell AI / Twilio API
        // const script = `Hey ${clientName}, this is your CredLaw assistant. Did you receive a letter from Chase Bank yet? If so, please snap a photo and upload it to the app so we can check for violations.`;
        // await makeCall(phoneNumber, script);

        return true; // Call triggered
    }

    return false;
}
