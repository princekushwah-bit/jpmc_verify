import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Shield, Calendar } from "lucide-react";

const Index = () => {
  // Static verification ID
  const verificationId = "7F4A9C2E8B1D6F3A5E9C7B4D2A8F6E1C";
  const enrollmentCode = "8BpioqrFPcAIuXbRc";
  const userCode = "zEdLKmMSBsBPSazdf";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">JPMorgan Chase & Co.</h1>
              <p className="text-sm text-muted-foreground">in partnership with Forage</p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Verified Certificate
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Verification Status */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-4">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">Certificate Verified</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-2">Certificate of Completion</h2>
            <p className="text-muted-foreground">This is to certify that</p>
          </div>

          {/* Certificate Card */}
          <Card className="p-8 md:p-12 mb-8 border-2">
            <div className="text-center mb-8">
              <h3 className="text-5xl font-bold text-primary mb-4">Ankush Nayak</h3>
              <p className="text-xl text-muted-foreground mb-2">has successfully completed</p>
              <h4 className="text-3xl font-semibold text-foreground mb-4">
                Software Engineering Virtual Experience
              </h4>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
                <Calendar className="h-5 w-5" />
                <span className="text-lg">July 14th, 2025</span>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Program Details */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-foreground mb-4">Program Overview</h5>
              <p className="text-muted-foreground mb-4">
                Over the period of June 2025 to July 2025, the participant has completed practical task modules in:
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Interface with a stock price data feed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Use JPMorgan Chase frameworks and tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Display data visually for traders</span>
                </li>
              </ul>
            </div>

            <Separator className="my-8" />

            {/* Issuer */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Issued by</p>
              <p className="text-lg font-semibold text-foreground">JPMorgan Chase & Co.</p>
              <p className="text-sm text-muted-foreground">in partnership with Forage</p>
            </div>
          </Card>

          {/* Verification Details */}
          <Card className="p-6 bg-muted/30">
            <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Verification Details
            </h5>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-muted-foreground">Verification ID:</span>
                <code className="font-mono text-foreground bg-background px-2 py-1 rounded">
                  {verificationId}
                </code>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-muted-foreground">Enrollment Verification Code:</span>
                <code className="font-mono text-foreground bg-background px-2 py-1 rounded">
                  {enrollmentCode}
                </code>
              </div>
              <Separator />
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="text-muted-foreground">User Verification Code:</span>
                <code className="font-mono text-foreground bg-background px-2 py-1 rounded">
                  {userCode}
                </code>
              </div>
            </div>
          </Card>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              This certificate is awarded for completion of the JPMorgan Chase Software Engineering Virtual Experience program.
              To verify this certificate, please contact JPMorgan Chase or Forage with the verification codes above.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2020 JPMorgan Chase & Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
