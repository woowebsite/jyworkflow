import RoleType from '~/models/RoleType'

const workflowAuthConfig = {
  FilterForm: {
    roles: [RoleType.SysAdmin],
  },
  CardDraggable: {
    roles: [RoleType.Employee, RoleType.SysAdmin, RoleType.Leader],
  },
  JobDrawer: {
    roles: [RoleType.SysAdmin, RoleType.Leader],
  },
  JobDrawerMoveBack: {
    roles: [RoleType.SysAdmin, RoleType.Leader, RoleType.Customer],
  },
}

export default workflowAuthConfig
