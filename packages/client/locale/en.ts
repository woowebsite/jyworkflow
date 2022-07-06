export const en = {
  common: {
    topBar: {
      profileMenu: {
        profile: 'Basic information',
        logout: 'Log out',
      },
    },
    menu: {
      settings: {
        title: 'Settings',
        changePassword: 'Change password',
        profile: 'Basic information',
        myJob: 'My job',
        configuration: 'General setting',
      },
      users: {
        title: 'Users',
        allUsers: 'All users',
        createUser: 'Create an user',
        authorized: 'Authorization',
      },
      customers: {
        title: 'Customers',
        allCustomers: 'All Customer',
        createCustomer: 'Create Customer',
      },
      jobs: {
        title: 'Jobs',
        allJobs: 'All Jobs',
        myJobs: 'My Jobs',
        createJob: 'Create Job',
      },
    },
    topbar: {
      workflow: 'Task board',
      salary: 'Salary',
      report: 'Report',
    },
    validator: {
      required: 'Please input {field}',
      maxSize: 'Image size must be less than 2MB.',
      typeImgUpload: 'You can only upload JPG/PNG format.'
    },
    messages: {
      notification: {
        success: {
          message: 'Notification Success',
          save: 'Save successfully',
          sent: 'Send successfully',
          delete: 'Delete successfully',
          loginTitle: 'Logged In',
          loginDesc: 'You have successfully logged in to Clean UI Pro React Admin Template!',
        },
        error: {
          message: 'Error',
          curentPassInvalid: 'Current password is invalid',
        },
      },
    },
    buttons: {
      save: 'Save',
      create: 'Create',
      delete: 'Delete',
      edit: 'Edit',
      actions: 'Actions',
      more: 'More',
      close: 'Close',
      cancel: 'Cancel',
      search: 'Search',
      payment: 'Payment',
      deposit: 'Deposit',
      send: 'Send',
      publish: 'Publish',
      upload: 'Upload',
      backToLogin: 'Back to Login Page',
      backToHome: 'Back to Home Page'
    },
    enum: {
      StatusType: {
        Actived: 'Actived',
        Deactive: 'Deactive',
      },
      JobStatus: {
        Deactive: 'Deactive', // delete
        Finish: 'Finish',
        Publish: 'Publish',
        Draft: 'Draft',
      },
    },
    userTable: {
      columns: {
        id: 'Id',
        name: 'Name',
        age: 'Age',
        image: 'Avatar',
        email: 'Email',
        phone: 'Phone',
        role: 'Role',
        createdAt: 'Created At',
      },
      actions: {
        resetPass: 'Reset Password'
      }
    },
    authorizedTable: {
      columns: {
        featureName: 'Feature Name',
        full: 'Full',
        create: 'Create',
        update: 'Update',
        delete: 'Delete',
        read: 'Read',
      },
    },
    accountMoney: {
      title: 'Account',
      placeholder: {
        deposit: 'Enter the amount to deposit',
      },
      label: {
        holding: 'Holding',
        dept: 'Dept',
      },
    },
    customerTable: {
      columns: {
        id: 'Id',
        name: 'Name',
        image: 'Avatar',
        facebook: 'Facebook',
        email: 'Email',
        customerType: 'Customer Type',
        createdAt: 'Created At',
      },
      filter: {
        name: 'Customer Name',
        type: 'Customer Type',
      },
    },
    jobTable: {
      columns: {
        id: 'Id',
        title: 'Title',
        link: 'Link',
        status: 'Status',
        description: 'Description',
        cost: 'Cost',
        priority: 'Priority',
        createdAt: 'Created At',
      },
      filter: {
        customer: 'Customer',
        leader: 'Leader',
        employee: 'Employee',
        month: 'Month',
      },
      deleteModal: {
        title: 'Delete job',
        content: 'Do you want to delete this job?',
      },
    },
    jobStatus: {
      title: 'Job Status',
      label: {
        status: 'Status',
        employee: 'Blender',
        retoucher: 'Retoucher',
        leader: 'Leader',
        customer: 'Customer',
      },
    },
    jobCreateform: {
      basicInfor: 'Basic information',
      assignee: 'Assignee',
      label: {
        code: 'Id',
        title: 'Title',
        link: 'Link',
        priority: 'Priority',
        status: 'Status',
        publishDate: 'Publish Date',
        dueDate: 'Due Date',
        description: 'Description',
        demoColor: 'Demo color',
        demoLayout: 'Demo layout',
        cost: 'Cost'
      },
    },

    customerCreateform: {
      label: {
        name: 'Name',
        description: 'Description',
        image: 'Avatar',
        email: 'Email',
        type: 'Customer Type',
        address: 'Address',
        phone: 'Phone',
      },
    },

    userCreateform: {
      label: {
        name: 'name',
        description: 'Description',
        image: 'Image',
        email: 'Email',
        role: 'Role',
      },
    },
    tableQuickEdit: {
      btnQuickEdit: 'Edit',
    },
    tableFilter: {
      tabFilter: {
        all: 'All',
      },
    },
    changePasswordForm: {
      label: {
        current: 'Current Password',
        password: 'New Password',
        confirmPassword: 'Confirm Password',
      },
      placeholder: {
        email: 'Enter email',
      },
      buttons: {
        resetPassword: 'Reset Password'
      }
    },
    socialConnect: {
      title: 'Social Network',
      connectToFacebook: 'Connected Facebook',
      connectToTwitter: 'Connected Twitter',
      connectToGoogle: 'Connected Google',
    },
    salarySetting: {
      title: 'Salary',
      labels: {
        retoucher: 'Retoucher',
        blend: 'Blend',
        leader: 'Leader',
      }
    },
    kpiSetting: {
      title: 'KPI',
      labels: {
        leader: 'Leader',
        leaderDesc: 'Bonus percentage on revenue achieved.',
        employee: 'Employee',
        employeeDesc: 'Bonus percentage on revenue achieved.',
      }
    },
    priceSetting: {
      title: 'Price',
      labels: {
        single: 'Single',
        zoom: 'Zoom',
      }
    },
    lockScreen: {
      accountLocked: 'Account Locked',
      maryStanform: 'Mary Stanform',
      unlockAccount: 'Unlock Account',
      placeholder: {
        password: 'Password'
      },
      haveAccount: 'Already have an account?',
    },
    registerPage: {
      placeholder: {
        fullName: 'Enter full name',
        email: 'Enter email',
        password: 'Enter passwword',
      },
      labels: {
        fullName: 'Full name',
        email: 'Email',
        password: 'Passwword',
      },
      buttons: {
        signup: 'Signup',
      },
      text: {
        term1: 'To register, please agree to',
        term2: 'Terms of Service',
        term3: 'and',
        term4: 'Privacy Policy',
      }
    },
    salaryJobTable: {
      columns: {
        id: 'Id',
        title: 'Title',
        link: 'Link',
        status: 'Status',
        publisedDate: 'Publish Date',
        cost: 'Cost',
        received: 'Received',  
        type: 'Type'
      },
      filter: {
        employee: 'Employee',
        month: 'Month',
      }
    },
    errors: {
      server: {
        title: 'Server Error',
        desc: 'This page is deprecated, deleted, or does not exist at all.',
        code: '500 —',
      },
      notFound: {
        title: 'Page not found',
        desc: 'This page is deprecated, deleted, or does not exist at all.',
        code: '404 —'
      }
    }
  },
  '/': {
    title: 'Index',
  },
  '/login': {
    signin: {
      title: 'Sign In',
      noAccount: 'Do not have an account?',
      placeholder: {
        email: 'Email',
        password: 'Password'
      },
      buttons: {
        login: 'Sign In',
        loginWithEmail: 'Sign in with Email',
        forgotPass: 'Forgot Password?'
      }
    },
  },
  
  '/admin/users': {
    title: 'All users',
    pageHeader: {
      buttons: {
        create: 'Add user',
      },
    },
  },
  '/admin/authorized/groups': {
    title: 'Authorization Group',
    pageHeader: {
      buttons: {
        create: 'Add user',
      },
    },
  },
  '/admin/customers': {
    title: 'All customers',
    pageHeader: {
      buttons: {
        create: 'Add customer',
      },
    },
  },
  '/admin/customers/new': {
    title: 'Create New Customer',
    pageHeader: {
      buttons: {
        create: 'Add customer',
        allCustomers: 'All customers',
      },
    },
    socialBox: {
      title: 'Social',
    },
  },
  '/admin/customers/[id]': {
    title: 'User Detail',
    pageHeader: {
      buttons: {
        create: 'Add customer',
        allCustomers: 'All customers',
      },
    },
    customerMoney: {
      title: 'Account',
      buttons: {
        addMoney: 'Add money',
        cancel: 'Cancel',
      },
      label: {
        money: 'Money',
        debt: 'Debt',
      },
    },
    socialBox: {
      title: 'Social',
    },
  },
  '/jobs': {
    title: 'Job',
    pageHeader: {
      buttons: {
        create: 'Add new',
        all: 'All jobs',
      },
    },
  },
  '/user/myjobs': {
    title: 'My Jobs',
    pageHeader: {
      buttons: {
        create: 'Add new',
        all: 'All jobs',
      },
    },
  },
  '/jobs/new': {
    title: 'Create a job',
    pageHeader: {
      buttons: {
        create: 'Add job',
        all: 'All jobs'
      },
    },
    jobStatus: {
      title: 'Job Status',
      label: {
        status: 'Status',
        employee: 'Blender',
        retoucher: 'Retoucher',
        leader: 'Leader',
        customer: 'Customer',
      },
    },
    jobMoney: {
      title: 'Cost',
      label: {
        cost: 'Cost',
        paid: 'Paid',
        debt: 'Debt',
      },
    },
  },
  '/jobs/[id]': {
    title: 'Job Detail',
    pageHeader: {
      buttons: {
        create: 'Add job',
        all: 'All jobs'
      },
    },
    jobStatus: {
      title: 'Job Status',
      label: {
        status: 'Status',
        employee: 'Blender',
        retoucher: 'Retoucher',
        leader: 'Leader',
        customer: 'Customer',
      },
    },
    jobMoney: {
      title: 'Cost',
      label: {
        cost: 'Cost',
        paid: 'Paid',
        debt: 'Debt',
      },
    },
    jobAssignee: {
      title: 'Job Assignee',
      columns: {
        assignee: 'Assignee',
        action: 'Action',
        updatedAt: 'Updated At',
      },
    },
  },
  '/admin/users/new': {
    title: 'Tạo người dùng',
  },
  '/admin/users/[id]': {
    title: 'User Detail',
    pageHeader: {
      buttons: {
        save: 'Save',
        all: 'All users'
      },
    },
    changePasswordBox: {
      title: 'Change Password',
    },
    socialBox: {
      title: 'Social',
    },
  },

  '/settings/profile': {
    title: 'Profile',
    changePassword: {
      title: 'Change Password',
    },
    socialBox: {
      title: 'Social Network',
    },
  },
  '/settings/myJob': {
    title: 'My job',
    pageHeader: {
      buttons: {
        create: 'Create',
        all: 'All jobs',
      },
    },
  },
  '/settings/configuration': {
    title: 'Configuration',
  },
  '/workflow': {
    title: 'Workflow',
    filter: {
      labels: {
        customer: 'Customer',
        employee: 'Employee',
        title: 'Title',
      },
    },
    pageHeader: {
      buttons: {
        all: 'All jobs',
      },
    },
    dividers: {
      today: 'Today',
      thisWeek: 'This week',
    },
    jobDrawer: {
      title: 'Job Detail',
    },
    jobStatus: {
      title: 'Job Status',
      label: {
        status: 'Status',
        employee: 'Blender',
        retoucher: 'Retoucher',
        leader: 'Leader',
        customer: 'Customer',
      },
    },
  },
  '/salary': {
    title: 'Salary'
  },
};
