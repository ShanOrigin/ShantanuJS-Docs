export const usedByContent = {
  badge: 'Ecosystem Community',
  title: 'Used By',
  description: 'Developers, educators, and creative technologists building interactive graphics applications with ShantanuJS.',
  addProjectButton: 'Add Your Project to "Used By"',
  emptyMessage: 'No projects added yet. Be the first to showcase your work with ShantanuJS!',
  modal: {
    title: 'Add Your Project',
    description: 'Share your work with the ShantanuJS developer community.',
    fields: {
      name: {
        label: 'Your Name',
        placeholder: 'e.g. Shantanu or @yourhandle',
      },
      usage: {
        label: 'What did you use ShantanuJS for?',
        placeholder: 'Describe your application, visual experiment, or how you used affine matrix transforms...',
      },
      projectUrl: {
        label: 'Project Link',
        placeholder: 'https://github.com/user/project or https://myproject.com',
      },
    },
    submitButton: 'Submit Project',
    cancelButton: 'Cancel',
  },
  card: {
    viewProject: 'View Project ↗',
  },
  validation: {
    nameRequired: 'Your name is required.',
    usageRequired: 'Please specify what you used ShantanuJS for.',
    urlRequired: 'A valid project link is required.',
    urlInvalid: 'Please enter a valid HTTP or HTTPS URL (e.g. https://github.com/...).',
    saveError: 'Unable to save your project locally.',
  },
} as const;
