const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, pubSub } = require('../utils')

async function createUser(parent, args, context, info) {
  debugger

  const newUser = await context.prisma.user.create({
    data: {
      firstName: args.firstName,
      lastName: args.lastName,
      sex: args.sex,
      email: args.email,
      phoneNumber: args.phoneNumber,
      age: args.age,
      address: args.address,
      average: args.average,
      city: args.city,
      state: args.state,
      zipcode: args.zipcode,
      usbcNumber: args.usbcNumber
    }
  });

  pubSub.publish("NEW_USER", newUser)

  return newUser;
}

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)

  // 2
  const user = await context.prisma.user.create({ data: { ...args, password } })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user.findUnique({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

async function post(parent, args, context, info) {
  const { userId } = context;

  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    }
  });

  pubSub.publish("NEW_LINK", newLink)

  return newLink;
}
  
module.exports = {
  signup,
  login,
  post,
  createUser
}