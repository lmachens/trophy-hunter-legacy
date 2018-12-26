import Jobs from '../jobs';

Jobs.allow({
  admin(userId) {
    return !!userId;
  }
});
