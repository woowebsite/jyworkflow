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
        priceConfig: 'Cài đặt giá',
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
        myJob: 'Công việc của tôi',
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
      typeImgUpload: 'Bạn chỉ có thể tải lên định dạng JPG/PNG.',
    },
    messages: {
      notification: {
        success: {
          message: 'Thông báo',
          save: 'Đã lưu',
          sent: 'Đã gửi',
          delete: 'Đã xóa',
          loginTitle: 'Đăng nhập',
          loginDesc:
            'Bạn đã đăng nhập thành công vào Clean UI Pro React Admin Template!',
        },
        error: {
          message: 'Lỗi',
          curentPassInvalid: 'Mật khẩu hiện tại chưa đúng',
        },
      },
      job: {
        save: 'Bạn vừa cập nhật công việc {field} thành công',
      },
    },
    buttons: {
      add: 'Thêm',
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
      backToLogin: 'Đến trang Đăng Nhập',
      backToHome: 'Trở về Trang Chủ',
      comment: 'Lời nhắn',
      moveNext: 'Chuyển tiếp'
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
        image: 'Ảnh',
        email: 'Email',
        phone: 'Điện thoại',
        money: 'Tiền',
        role: 'Nhóm người dùng',
        createdAt: 'Ngày tạo',
      },
      actions: {
        resetPass: 'Đổi mật khẩu',
      },
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
        image: 'Ảnh',
        facebook: 'Facebook',
        email: 'Email',
        customerType: 'Nhóm khách hàng',
        createdAt: 'Ngày tạo',
      },
      filter: {
        name: 'Tên khách hàng',
        type: 'Loại khách hàng',
      },
    },
    priceSettingTable: {
      columns: {
        termName: 'Loại ảnh',
        description: 'Ghi chú',
        price: 'Đơn giá',
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
        code: 'Mã số',
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
        employee: 'Blend màu',
        retoucher: 'Chấm sửa',
        leader: 'Trưởng nhóm',
        customer: 'Khách hàng',
      },
    },
    jobCreateform: {
      basicInfor: 'Thông tin cơ bản',
      assignee: 'Chi tiết thực hiện',
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
        type: 'Loại',
        cost: 'Chi phí',
        demoLayout: 'Demo layout',
      },
    },
    jobMetaDemo: {
      title: 'Link Demo',
      label: {
        demoColor: 'Demo màu',
        demoLayout: 'Demo layout',
      },
    },

    customerCreateform: {
      label: {
        name: 'Tên',
        description: 'Ghi chú',
        image: 'Ảnh',
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
        image: 'Ảnh',
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
      placeholder: {
        email: 'Nhập email',
      },
      buttons: {
        resetPassword: 'Đặt lại mật khẩu',
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
      },
    },
    kpiSetting: {
      title: 'KPI',
      labels: {
        leader: 'Trưởng nhóm',
        leaderDesc: 'Thưởng phần trăm trên doanh thu đạt được',
        employee: 'Nhân viên',
        employeeDesc: 'Thưởng phần trăm trên doanh thu đạt được',
      },
    },
    priceSetting: {
      title: 'Báo giá',
      labels: {
        single: 'Ảnh lẻ',
        zoom: 'Ảnh phóng',
      },
    },
    lockScreen: {
      accountLocked: 'Account Locked',
      maryStanform: 'Mary Stanform',
      unlockAccount: 'Unlock Account',
      placeholder: {
        password: 'Password',
      },
      haveAccount: 'Already have an account?',
    },
    registerPage: {
      placeholder: {
        fullName: 'Nhập họ và tên',
        email: 'Nhập email',
        password: 'Nhập mật khẩu',
      },
      labels: {
        fullName: 'Họ và tên',
        email: 'Email',
        password: 'Mật khẩu',
      },
      buttons: {
        signup: 'Đăng ký',
      },
      text: {
        term1: 'Để đăng ký, bạn hãy đồng ý với',
        term2: 'Điều khoản dichj vụ',
        term3: 'và',
        term4: 'Chính sách bảo mật',
      },
    },
    errors: {
      server: {
        title: 'Lỗi máy chủ',
        desc:
          'Trang này không được dùng nữa, đã bị xóa hoặc hoàn toàn không tồn tại.',
        code: '500 —',
      },
      notFound: {
        title: 'Không tìm thấy trang',
        desc:
          'Trang này không được dùng nữa, đã bị xóa hoặc hoàn toàn không tồn tại.',
        code: '404 —',
      },
    },
  },
  '/': {
    title: 'Bảng điều phối công việc',
    pageHeader: {
      buttons: {
        all: 'Danh sách công việc',
      },
    },
    jobDrawer: {
      title: 'Chi tiết công việc',
      buttons: {
        rework: 'Y/c chỉnh sửa',
      },
      comments: {
        title: 'nhận xét',
      },
    },
    jobCommentModal: {
      title: 'Lời nhắn',
      labels: {
        description: 'Nội dung',
      },
    },
  },
  '/login': {
    signin: {
      title: 'Đăng nhập',
      noAccount: 'Bạn chưa có tài khoản?',
      placeholder: {
        email: 'Email',
        password: 'Password',
      },
      buttons: {
        login: 'Đăng nhập',
        loginWithEmail: 'Đăng nhập với Email',
        forgotPass: 'Quên mật khẩu?',
      },
    },
  },

  '/admin/users': {
    title: 'Danh sách người dùng',
    pageHeader: {
      buttons: {
        create: 'Thêm người dùng',
      },
    },
  },
  '/admin/authorized/groups': {
    title: 'Phân quyền',
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
        employee: 'Blend màu',
        retoucher: 'Chấm sửa',
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
        employee: 'Blend màu',
        retoucher: 'Chấm sửa',
        leader: 'Trưởng nhóm',
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
    jobComment: {
      title: 'Phản hồi',
      columns: {
        assignee: 'Người dùng',
        action: 'Lời nhắn',
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
        all: 'Danh sách người dùng',
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
    basicInfor: {
      title: 'Thông tin chính',
    },
    changePassword: {
      title: 'Đổi mật khẩu',
    },
    socialBox: {
      title: 'Liên kết mạng xã hội',
    },
  },
  '/settings/myJob': {
    title: 'Công việc của tôi',
    pageHeader: {
      buttons: {
        create: 'Tạo mới',
        all: 'Danh sách công việc',
      },
    },
  },
  '/settings/priceConfig': {
    title: 'Cài đặt giá',
  },
  '/settings/configuration': {
    title: 'Cài đặt chung',
  },
  '/report': {
    report: {
      title: 'Thống kê doanh thu',
      chart: {
        labels: {
          revenue: 'Doanh thu',
          profit: 'Lợi nhuận',
        },
      },
      statistic: {
        numberJobDone: 'Số job đã làm xong',
        numberJobRemain: 'Số job còn tồn',
        numberJobDeadline: 'Số job đến Deadline',
        numberJobToday: 'Số job nhận trong ngày',
      },
    },
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
      buttons: {
        rework: 'Y/c chỉnh sửa',
      },
      comments: {
        title: 'nhận xét',
      },
    },
    jobCommentModal: {
      title: 'Lời nhắn',
      labels: {
        description: 'Nội dung',
      },
    },
    jobStatus: {
      title: 'Tình trạng',
      label: {
        status: 'Giai đoạn',
        employee: 'Blend màu',
        retoucher: 'Chấm sửa',
        leader: 'Trưởng nhóm',
        customer: 'Khách hàng',
      },
    },
  },
}
