import { Program } from '@/data/programs';
import { Event } from '@/data/events';
import { LeadSubmission } from './formHandler';

// Export entities for use throughout the application
export { Program, Event, LeadSubmission };

// Application deadlines (static data)
export const ApplicationDeadline = {
  list: () => {
    return new Promise((resolve) => {
      const deadlines = [
        {
          id: "spring-2026",
          term: "Spring 2026",
          earlySubmit: "2025-10-14",
          prioritySubmit: "2025-11-11", 
          finalSubmit: "2026-01-05",
          startDate: "2026-01-20",
          benefits: {
            early: "Deposit Waiver and Application Fee Waiver Available",
            priority: "Application Fee Waiver Available and Early Application Review"
          }
        }
      ];
      setTimeout(() => resolve(deadlines), 100);
    });
  }
};

// User authentication (placeholder - implement as needed)
export const User = {
  // Placeholder for future authentication implementation
  login: () => Promise.reject(new Error('Authentication not implemented')),
  logout: () => Promise.resolve(),
  getCurrentUser: () => Promise.resolve(null)
};