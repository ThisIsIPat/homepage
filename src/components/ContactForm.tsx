import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://ipat.app.n8n.cloud/webhook/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("homepage:contact")
        },
        body: JSON.stringify({
          email,
          text
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        setText("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
          <p className="text-sm text-muted-foreground">
            Send me a message and I'll get back to you within 8 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Tell me about your project, challenges, or questions..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              disabled={isSubmitting}
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {submitStatus === "success" && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-800">Message sent successfully!</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm text-red-800">Failed to send message. Please try again.</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm; 