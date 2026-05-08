# Guestara Booking Calendar Heatmap

An interactive hotel booking analytics dashboard built using React and Tailwind CSS.

This project visualizes hotel room occupancy using a calendar heatmap and provides booking insights through dynamic analytics, drag-based date selection, and booking exploration tools.

---

## Features

### Core Features

- Interactive month-view calendar
- Occupancy heatmap visualization
- Drag-to-select date range
- Cross-month selection support
- Real-time booking overlap filtering
- Booking detail side panel
- Dynamic occupancy analytics
- Async JSON data loading
- Month navigation controls

---

## Open-Scope Features Implemented

### Search System
- Search bookings by guest name
- Search by room number
- Real-time filtering

### Dashboard Analytics
- Occupancy gauge
- Revenue analytics
- Average stay duration
- Longest stay metrics
- Most booked room analytics
- Monthly booking trends chart

### Persistence
- Selected month persists after refresh
- Search query persists
- Selected range persists using localStorage

### UX Improvements
- Skeleton loading state
- Empty search states
- Custom scrollbars
- Interactive hover animations
- Responsive dashboard layout

---

## Tech Stack

- React
- Tailwind CSS
- Recharts
- date-fns
- Vite

---

## Project Structure

```bash
src/
│
├── components/
├── hooks/
├── utils/
├── styles/
```

---

## Key Engineering Decisions

### Occupancy Logic

Bookings follow an inclusive-exclusive date convention:

- Check-in date counts as occupied
- Check-out date does NOT count as occupied

Example:

```text
Check In: Feb 10
Check Out: Feb 13

Occupied:
Feb 10
Feb 11
Feb 12

Not occupied:
Feb 13
```

This was implemented using interval overlap logic and careful date normalization.

---

### Drag Selection

Native mouse events were used instead of drag-and-drop libraries to keep interaction lightweight and fully controllable.

The selection system supports:
- Forward dragging
- Reverse dragging
- Cross-month selection

---

## Installation

```bash
npm install
npm run dev
```

---

## Future Improvements

- Room-type filtering
- Year-view heatmap
- CSV export
- Keyboard accessibility
- Dark mode
- Mobile optimization

---

## Author

Punith Kumar
punithkumarhv1@gmail.com

video overview ->>https://youtu.be/0nA2H9rirZE
