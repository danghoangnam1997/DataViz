import { PageWrapper } from '@/components/page-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github } from 'lucide-react';

export const metadata = {
  title: 'Contact - Luminescence Data',
  description: 'Get in touch with Luminescence Data for inquiries and collaborations.',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Contact Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send a Message</CardTitle>
            <CardDescription>
              Feel free to reach out. Please note: this form is for demonstration purposes on a static site and does not currently send messages. Please use the contact details provided.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="mt-1" />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-gradient-from to-gradient-to text-primary-foreground hover:opacity-90 transition-opacity" disabled>
                Send Message (Disabled)
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>You can also reach me through these channels:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:your.email@example.com" className="text-foreground hover:text-primary transition-colors">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-6 w-6 text-primary" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  linkedin.com/in/yourprofile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-6 w-6 text-primary" />
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                  github.com/yourusername
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Based in [Your City, Your Country]</p>
              <p className="text-muted-foreground">Open to remote collaborations worldwide.</p>
               <div className="mt-4 h-48 w-full rounded-md bg-muted flex items-center justify-center">
                <p className="text-sm text-muted-foreground">(Map Placeholder)</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </PageWrapper>
  );
}
