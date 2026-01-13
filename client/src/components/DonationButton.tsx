import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Coffee, CreditCard, Wallet, AlertCircle } from "lucide-react";
import { useState } from "react";

export function DonationButton() {
  const [showPayPalNotice, setShowPayPalNotice] = useState(false);

  const handlePayPalClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPayPalNotice(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2 rounded-full border-purple-200 bg-purple-50/50 text-purple-900 hover:bg-purple-100 hover:text-purple-950 dark:border-purple-800 dark:bg-purple-950/30 dark:text-purple-100 dark:hover:bg-purple-900/50"
        >
          <Coffee className="h-4 w-4" />
          Buy me a coffee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Coffee className="h-6 w-6 text-purple-500" />
            Support my work
          </DialogTitle>
          <DialogDescription>
            If you find value in my digital garden, consider supporting my research and writing.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <a
            href="https://donate.stripe.com/test_dRm9AT2gI7AT92VeRe5kk01" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full gap-2 bg-[#635BFF] hover:bg-[#534ACF] text-white" size="lg">
              <CreditCard className="h-5 w-5" />
              Donate via Stripe
            </Button>
          </a>
          
          <button
            onClick={handlePayPalClick}
            className="w-full"
          >
            <Button className="w-full gap-2 bg-[#0070BA] hover:bg-[#005EA6] text-white" size="lg">
              <Wallet className="h-5 w-5" />
              Donate via PayPal
            </Button>
          </button>

          {showPayPalNotice && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                <div className="text-sm text-amber-800 dark:text-amber-200">
                  <p className="font-semibold">PayPal donation route is not operational yet.</p>
                  <p className="mt-1 text-xs opacity-90">Please use the Stripe option above for now. PayPal will be available soon!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
