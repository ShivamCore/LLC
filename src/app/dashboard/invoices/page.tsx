"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CreditCard,
  Download,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Receipt,
  Shield,
  ExternalLink
} from "lucide-react";
import { mockClient } from "@/data/dashboard-data";
import { useState } from "react";

export default function InvoicesPage() {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayInvoice = async (invoiceId: string) => {
    setIsProcessingPayment(true);
    
    // Simulate Stripe payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      alert("Payment processed successfully! You'll receive a confirmation email shortly.");
    }, 2000);
  };

  const handleDownloadInvoice = (invoice: any) => {
    // Simulate PDF download
    console.log(`Downloading invoice ${invoice.number}`);
    alert(`Downloading ${invoice.number}.pdf`);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Paid
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      case 'overdue':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            Overdue
          </span>
        );
      default:
        return null;
    }
  };

  const totalOwed = mockClient.invoices
    .filter(inv => inv.status !== 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const nextPaymentAmount = mockClient.subscription.amount;
  const nextPaymentDate = new Date(mockClient.subscription.nextPayment);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-950 mb-2">
                Invoices & Billing
              </h1>
              <p className="text-lg text-neutral-700">
                Manage your payments and download invoices
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={() => window.open('mailto:billing@valenzamedia.com')}
            >
              Contact Billing Support
            </Button>
          </div>
        </motion.div>

        {/* Payment Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="luxury-card border-neutral-200 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 mb-1">Outstanding Balance</p>
                  <p className="text-3xl font-bold text-neutral-950">${totalOwed.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-gold-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="luxury-card border-neutral-200 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 mb-1">Next Payment</p>
                  <p className="text-3xl font-bold text-neutral-950">${nextPaymentAmount.toLocaleString()}</p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Due {nextPaymentDate.toLocaleDateString()}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lavender-100 to-lavender-200 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-lavender-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="luxury-card border-neutral-200 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 mb-1">Payment Method</p>
                  <p className="text-lg font-semibold text-neutral-950">•••• •••• •••• 4242</p>
                  <p className="text-sm text-neutral-600 mt-1">Visa ending in 4242</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Subscription Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-lavender-50 to-gold-50 border-lavender-200">
            <CardHeader>
              <CardTitle className="flex items-center text-neutral-950">
                <Shield className="w-5 h-5 text-gold-600 mr-2" />
                Recurring Subscription
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold text-neutral-950">
                    {mockClient.subscription.plan} - ${mockClient.subscription.amount.toLocaleString()}/month
                  </h3>
                  <p className="text-sm text-neutral-700">
                    Next billing date: {nextPaymentDate.toLocaleDateString()}
                  </p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs font-medium text-green-700">Auto-renewal enabled</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    Update Payment Method
                  </Button>
                  <br />
                  <Button variant="ghost" size="sm" className="text-neutral-600">
                    Manage Subscription
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Invoices List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="luxury-card border-neutral-200 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center text-neutral-950">
                <Receipt className="w-5 h-5 text-gold-600 mr-2" />
                Invoice History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockClient.invoices.map((invoice, index) => (
                  <motion.div
                    key={invoice.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-neutral-200 bg-gradient-to-r from-neutral-50 to-cream-50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="font-semibold text-neutral-950">
                            Invoice #{invoice.number}
                          </h3>
                          {getStatusBadge(invoice.status)}
                        </div>
                        
                        <p className="text-sm text-neutral-600 mb-2">
                          {invoice.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-neutral-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Due: {new Date(invoice.dueDate).toLocaleDateString()}
                          </div>
                          {invoice.paidDate && (
                            <div className="flex items-center">
                              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                              Paid: {new Date(invoice.paidDate).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-neutral-950">
                            ${invoice.amount.toLocaleString()}
                          </p>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownloadInvoice(invoice)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          
                          {invoice.status === 'pending' && (
                            <Button
                              size="sm"
                              className="premium-button btn-gold"
                              onClick={() => handlePayInvoice(invoice.id)}
                              disabled={isProcessingPayment}
                            >
                              {isProcessingPayment ? (
                                <div className="flex items-center">
                                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-neutral-800 border-t-transparent mr-2"></div>
                                  Processing...
                                </div>
                              ) : (
                                <>
                                  <CreditCard className="w-4 h-4 mr-2" />
                                  Pay Now
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Invoice Items */}
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <h4 className="font-medium text-neutral-800 mb-2">Invoice Items:</h4>
                      <div className="space-y-1">
                        {invoice.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between text-sm">
                            <span className="text-neutral-600">{item.description}</span>
                            <span className="text-neutral-800 font-medium">${item.amount.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Integration Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-neutral-950">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                Secure Payment Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-neutral-700">
                  All payments are processed securely through Stripe with industry-standard encryption.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-neutral-700">PCI DSS Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-neutral-700">SSL Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-neutral-700">Automatic Receipts</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-neutral-600 mb-2">
                    Need to update your payment method or have billing questions?
                  </p>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('mailto:billing@valenzamedia.com')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Billing Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}