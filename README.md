# TagnPark Landing Page

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Waitlist Signup**: Allow users to join a waitlist for early access by submitting their email.
- **API Integration**: Integrates with [Resend](https://resend.com) to manage subscriptions.
- **Iconography**: Utilizes [Lucide Icons](https://lucide.dev/) for a modern and consistent UI.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/tagnpark-landing.git
   cd tagnpark-landing
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. **Install Additional Dependencies**:
   This project uses `lucide-react` for icons.
   ```bash
   npm install lucide-react
   # or
   yarn add lucide-react
   # or
   pnpm add lucide-react
   # or
   bun add lucide-react
   ```

### Environment Variables

Create a `.env` file in the root of your project and add the following:

```properties
RESEND_API_KEY=your_resend_api_key_here
EMAIL_OCTOPUS_LIST_ID=your_list_id_here
```
