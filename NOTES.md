# NOTES

## Open-Scope Features Chosen

### 1. Search System

I added a real-time booking search system that allows users to filter bookings by:
- Guest name
- Room number

I chose this because it reflects how hotel staff would realistically interact with a booking dashboard.

---

### 2. Dashboard Analytics

I implemented a dashboard analytics section containing:
- Occupancy rate
- Revenue analytics
- Average stay duration
- Longest stay
- Most booked room
- Monthly booking trends

This helped transform the project from a basic calendar into a more complete hotel analytics tool.

---

### 3. Persistence

I implemented localStorage persistence for:
- Current month
- Search query
- Selected date range

This improves usability and makes the application feel more stateful and production-like.

---

## Tradeoffs

### Desktop-First Design

I focused primarily on desktop experience because the assignment mentioned desktop support was the priority.

---

### No Backend

All analytics and filtering are performed client-side using the provided JSON dataset.

---

## What I Would Improve With More Time

- Add room filtering
- Add keyboard navigation
- Add export to CSV
- Improve accessibility
- Add yearly heatmap overview
- Improve mobile responsiveness