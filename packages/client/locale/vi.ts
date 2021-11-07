export const vi = {
  common: {
    topBar: {
      profileMenu: {
        profile: 'Thông tin cá nhân',
        logout: 'Đăng xuất',
      },
    },
    menu: {
      settings: {
        title: 'Cài đặt',
        changePassword: 'Đổi mật khẩu',
        profile: 'Thông tin cá nhân',
        configuration: 'Cài đặt chung',
      },
      users: {
        title: 'Người dùng',
        allUsers: 'Danh sách người dùng',
        createUser: 'Tạo người dùng',
        authorized: 'Phân quyền',
      },
      customers: {
        title: 'Khách hàng',
        allCustomers: 'Danh sách khách hàng',
        createCustomer: 'Tạo khách hàng',
      },
      jobs: {
        title: 'Công việc',
        allJobs: 'Quản lý công việc',
        myJobs: 'Danh sách công việc',
        createJob: 'Tạo công việc',
      },
    },
    topbar: {
      workflow: 'Bảng công việc',
      salary: 'Tính lương',
      report: 'Báo cáo',
    },
    validator: {
      required: 'Bạn vui lòng nhập {field}',
      maxSize: 'Kích thước hình ảnh phải nhỏ hơn 2MB.',
      typeImgUpload: 'Bạn chỉ có thể tải lên định dạng JPG/PNG.'
    },
    messages: {
      changePassword: {
        isValid: 'Mật khẩu hiện tại chưa đúng',
      },
    },
    buttons: {
      save: 'Lưu',
      create: 'Tạo mới',
      delete: 'Xoá',
      edit: 'Sửa',
      actions: 'Tác vụ',
      more: 'Thêm nữa',
      close: 'Đóng',
      cancel: 'Hủy bỏ',
      search: 'Tìm kiếm',
      payment: 'Thanh toán',
      deposit: 'Nạp tiền',
      send: 'Gửi đi',
      publish: 'Đã gửi',
      upload: 'Tải lên',
    },
    enum: {
      StatusType: {
        Actived: 'Hoạt động',
        Deactive: 'Vô hiệu',
      },
      JobStatus: {
        Deactive: 'Vô hiệu', // delete
        Finish: 'Hoàn thành',
        Publish: 'Đã gửi',
        Draft: 'Đã lưu',
      },
    },
    userTable: {
      columns: {
        id: 'Mã số',
        name: 'Tên người dùng',
        age: 'Tuổi',
        image: 'Ảnh đại diện',
        email: 'Email',
        phone: 'Điện thoại',
        role: 'Nhóm người dùng',
        createdAt: 'Ngày tạo',
      },
      actions: {
        resetPass: 'Đổi mật khẩu'
      }
    },
    authorizedTable: {
      columns: {
        featureName: 'Chức năng',
        full: 'Toàn bộ',
        create: 'Thêm',
        update: 'Sửa',
        delete: 'Xoá',
        read: 'Đọc',
      },
    },
    accountMoney: {
      title: 'Tài khoản',
      placeholder: {
        deposit: 'Nhập số tiền cần nạp',
      },
      label: {
        holding: 'Tạm giữ',
        dept: 'Nợ',
      },
    },
    customerTable: {
      columns: {
        id: 'Mã số',
        name: 'Tên khách hàng',
        image: 'Ảnh đại diện',
        facebook: 'Facebook',
        customerType: 'Nhóm khách hàng',
        createdAt: 'Ngày tạo',
      },
      filter: {
        name: 'Tên khách hàng',
        type: 'Loại khách hàng',
      },
    },
    jobTable: {
      columns: {
        id: 'Mã số',
        title: 'Tiêu đề',
        link: 'Đường dẫn',
        status: 'Trạng thái',
        description: 'Mô tả',
        cost: 'Chi phí',
        priority: 'Ưu tiên',
        createdAt: 'Ngày tạo',
      },
      filter: {
        customer: 'Khách hàng',
        leader: 'Trưởng nhóm',
        employee: 'Nhân viên',
        month: 'Tháng',
      },
      deleteModal: {
        title: 'Xoá công việc',
        content: 'Bạn thực sự muốn xoá công việc này?',
      },
    },
    jobStatus: {
      title: 'Tình trạng',
      label: {
        status: 'Trạng thái',
        employee: 'Thợ ảnh',
        leader: 'Trưởng nhóm',
        customer: 'Khách hàng',
      },
    },
    jobCreateform: {
      label: {
        code: 'Mã số',
        title: 'Tiêu đề',
        link: 'Đường dẫn',
        priority: 'Ưu tiên',
        status: 'Trạng thái',
        publishDate: 'Ngày gửi',
        dueDate: 'Ngày dự kiến',
        description: 'Ghi chú',
        demoColor: 'Demo màu',
        demoLayout: 'Demo layout',
      },
    },

    customerCreateform: {
      label: {
        name: 'Tên',
        description: 'Ghi chú',
        image: 'Ảnh đại diện',
        email: 'Email',
        type: 'Loại khách hàng',
        address: 'Địa chỉ',
        phone: 'Số điện thoại',
      },
    },

    userCreateform: {
      label: {
        name: 'Họ tên',
        description: 'Mô tả',
        image: 'Ảnh đại diện',
        email: 'Email',
        role: 'Nhóm người dùng',
      },
    },
    tableQuickEdit: {
      btnQuickEdit: 'Sửa nhanh',
    },
    tableFilter: {
      tabFilter: {
        all: 'Tất cả',
      },
    },
    changePasswordForm: {
      label: {
        current: 'Mật khẩu hiện tại',
        password: 'Mật khẩu mới',
        confirmPassword: 'Xác nhận mật khẩu',
      },
    },
    socialConnect: {
      title: 'Mạng xã hội',
      connectToFacebook: 'Facebook',
      connectToTwitter: 'Twitter',
      connectToGoogle: 'Google',
    },
    salarySetting: {
      title: 'Lương',
      labels: {
        retoucher: 'Nhân viên chấm sửa',
        blend: 'Nhân viên blend màu',
        leader: 'Trưởng nhóm',
      }
    },
    kpiSetting: {
      title: 'KPI',
      labels: {
        leader: 'Trưởng nhóm',
        leaderDesc: 'Thưởng phần trăm trên doanh thu đạt được',
        employee: 'Nhân viên',
        employeeDesc: 'Thưởng phần trăm trên doanh thu đạt được',
      }
    },
    priceSetting: {
      title: 'Báo giá',
      labels: {
        single: 'Ảnh lẻ',
        zoom: 'Ảnh phóng',
      }
    }
  },
  '/': {
    title: 'Index',
  },
  '/login': {
    signin: 'Đăng nhập',
  },
  
  '/admin/users': {
    title: 'Danh sách người dùng',
    pageHeader: {
      buttons: {
        create: 'Thêm người dùng',
      },
    },
  },
  '/admin/customers': {
    title: 'Danh sách khách hàng',
    pageHeader: {
      buttons: {
        create: 'Thêm khách hàng',
      },
    },
  },
  '/admin/customers/new': {
    title: 'Tạo khách hàng',
    pageHeader: {
      buttons: {
        create: 'Thêm khách hàng',
        allCustomers: 'Danh sách khách hàng',
      },
    },
    socialBox: {
      title: 'Mạng xã hội',
    },
  },
  '/admin/customers/[id]': {
    title: 'Tạo khách hàng',
    pageHeader: {
      buttons: {
        create: 'Thêm khách hàng',
        allCustomers: 'Danh sách khách hàng',
      },
    },
    customerMoney: {
      title: 'Tài khoản',
      buttons: {
        addMoney: 'Nạp tiền',
        cancel: 'Hủy bỏ',
      },
      label: {
        money: 'Tiền',
        debt: 'Công nợ',
      },
    },
    socialBox: {
      title: 'Mạng xã hội',
    },
  },
  '/jobs': {
    title: 'Danh sách công việc',
    pageHeader: {
      buttons: {
        create: 'Tạo mới',
        all: 'Danh sách công việc',
      },
    },
  },
  '/user/myjobs': {
    title: 'Danh sách công việc',
    subTitle: 'Những công việc bạn đang tham gia',
    pageHeader: {
      buttons: {
        create: 'Tạo mới',
        all: 'Danh sách công việc',
      },
    },
  },
  '/jobs/new': {
    title: 'Tạo công việc',
    pageHeader: {
      buttons: {
        create: 'Tạo mới',
        all: 'Danh sách công việc',
      },
    },
    jobStatus: {
      title: 'Tình trạng',
      label: {
        status: 'Trạng thái',
        employee: 'Thợ ảnh',
        leader: 'Leader',
        customer: 'Khách hàng',
      },
    },
    jobMoney: {
      title: 'Chi phí',
      label: {
        cost: 'Chi phí',
        paid: 'Đã thanh toán',
        debt: 'Còn nợ',
      },
    },
  },
  '/jobs/[id]': {
    title: 'Chưa đặt tiêu đề',
    pageHeader: {
      buttons: {
        create: 'Tạo mới',
        all: 'Danh sách công việc',
      },
    },
    jobStatus: {
      title: 'Tình trạng',
      label: {
        status: 'Trạng thái',
        employee: 'Thợ ảnh',
        leader: 'Leader',
        customer: 'Khách hàng',
      },
    },
    jobMoney: {
      title: 'Chi phí',
      label: {
        cost: 'Chi phí',
        paid: 'Đã thanh toán',
        debt: 'Còn nợ',
      },
    },
    jobAssignee: {
      title: 'Thực hiện',
      columns: {
        assignee: 'Nhân viên',
        action: 'Thực hiện',
        updatedAt: 'Ngày',
      },
    },
  },
  '/admin/users/new': {
    title: 'Tạo người dùng',
  },
  '/admin/users/[id]': {
    title: 'Cập nhật người dùng',
    pageHeader: {
      buttons: {
        save: 'Lưu',
        all: 'Danh sách người dùng'
      },
    },
    changePasswordBox: {
      title: 'Thay đổi mật khẩu',
    },
    socialBox: {
      title: 'Mạng xã hội',
    },
  },

  '/settings/profile': {
    title: 'Thông tin cá nhân',
    changePassword: {
      title: 'Đổi mật khẩu',
    },
    socialBox: {
      title: 'Liên kết mạng xã hội',
    },
  },
  '/settings/configuration': {
    title: 'Cài đặt chung',
  },
  '/workflow': {
    title: 'Bảng điều phối công việc',
    filter: {
      labels: {
        customer: 'Khách hàng',
        employee: 'Nhân viên',
        title: 'Tiêu đề',
      },
    },
    pageHeader: {
      buttons: {
        all: 'Danh sách công việc',
      },
    },
    dividers: {
      today: 'Hôm nay',
      thisWeek: 'Tuần này',
    },
    jobDrawer: {
      title: 'Chi tiết công việc',
    },
    jobStatus: {
      title: 'Tình trạng',
      label: {
        status: 'Giai đoạn',
        employee: 'Thợ ảnh',
        leader: 'Trưởng nhóm',
        customer: 'Khách hàng',
      },
    },
  },
};
