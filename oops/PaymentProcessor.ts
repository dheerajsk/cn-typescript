abstract class PaymentProcessor {
  // declaration of method.
  abstract processPayment(amount: number);

  displayTransaction() {
    console.log("Displaying the transaction");
  }
}

class CreditCardProcessor implements IPaymentProcessor {
  displayTransaction() {
    throw new Error("Method not implemented.");
  }
  processPayment(amount: number) {
    console.log("Processing Payment");
  }
}

//1. Using Abstract classes
//2. Using Interfaces.

interface IPaymentProcessor {
  processPayment(amount: number);
  displayTransaction();
}
