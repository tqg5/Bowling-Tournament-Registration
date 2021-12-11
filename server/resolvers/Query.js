function feed(parent, args, context, info) {
    return context.prisma.link.findMany()
}

function get(parent, args, context, info) {
    return context.prisma.link.findUnique({ where: { id: +args.id } });
}

function users(parent, args, context, info) {
    return context.prisma.user.findMany()
}
  
module.exports = {
    users
};