# VIN Decoder

A single-page React application for decoding vehicle VIN numbers using the official NHTSA API.


## Features

### Home Page

- Decode 17-character VIN numbers
- Client-side VIN validation
- Display decoded vehicle information
- Display API status messages
- Loading state during API requests
- History of the last three decoded VINs
- Reuse previously decoded VINs with one click

### Vehicle Variables

- Browse all available vehicle variables provided by the NHTSA API
- View detailed information for each variable
- Responsive card layout

### Variable Details

- Display complete information about a selected vehicle variable
- Show variable ID, group, data type, and description

---

## Technologies

- React
- TypeScript
- React Router
- Axios
- CSS Modules

---

## API

This project uses the official NHTSA Vehicle Product Information Catalog (vPIC) API.

https://vpic.nhtsa.dot.gov/api/

---

## Responsive Design

The application is responsive and works correctly on screen sizes from **420px** to **1440px**.

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/aleksandraostrovskaya/vin-decoder.git
```

### 2. Open the project

```bash
cd vin-decoder
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```