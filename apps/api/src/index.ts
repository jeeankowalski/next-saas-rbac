import { ability } from '@saas/auth';

const userCanInviteSomeoneElse = ability.can('invite', 'User');
const userCanDeleteOthersUSers = ability.can('delete', 'User');

console.log(userCanInviteSomeoneElse);
console.log(userCanDeleteOthersUSers);
