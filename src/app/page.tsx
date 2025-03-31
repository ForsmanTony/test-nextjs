"use client";

import { ExpenseForm } from "@/components/expenseForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form>
          <ExpenseForm />
        </form>
      </div>
    </main>
  );
}
