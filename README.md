# CreatorFarm – Phase 6 (Clean Rebuild)

Clean Phase 6 focused on:
- Admin settings (prices + Razorpay plan IDs) stored in DB (`TierSettings` singleton)
- Membership page creates Razorpay subscriptions server-side

## Setup

1) Install dependencies
```bash
npm install
```

2) Create `.env` from `.env.example`

3) Push DB schema
```bash
npx prisma db push
npx prisma generate
```

4) Run
```bash
npm run dev
```

## Flow

1. Go to `/signin` and login using `ADMIN_EMAIL` + `ADMIN_PASSWORD`
2. Go to `/admin/settings` and save plan IDs:
   - `razorpayBasicPlanId`
   - `razorpayProPlanId`
3. Go to `/membership` and click Join Basic / Join Pro

## Why this avoids your earlier issues
- No nodemailer (so no `Can't resolve 'nodemailer'`)
- No `@/app/*` alias mistakes. All imports use `@/lib/...` which maps to `app/lib/...`
- Uses exact Prisma column names: `razorpayBasicPlanId`, `razorpayProPlanId`
