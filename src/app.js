import Test from './classes/Test'
import helloWorld from './messages/helloWorld'

const test = new Test(helloWorld, document.getElementById('app'))

test.init()