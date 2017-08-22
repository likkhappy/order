import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import register from '@/page/register'
import page from '@/page/page'
import home from '@/page/home'
import task from '@/page/task'
import person from '@/page/person/person'
import personHome from '@/page/person/home'
import service from '@/page/person/service'
import recommend from '@/page/person/recommend'
import info from '@/page/person/info'
import modifyLoginPwd from '@/page/person/modifyLoginPwd'
import forgetPwd from '@/page/person/forgetPwd'
import modifyQQ from '@/page/person/modifyQQ'
import modifyPayPwd from '@/page/person/modifyPayPwd'
import buyManager from '@/page/person/buyManager'
import addTaobaoManager from '@/page/person/addTaoBao'
import addJDManager from '@/page/person/addJD'
import withdraw from '@/page/person/withdraw'
import addBankCard from '@/page/person/addBankCard'
import bill from '@/page/person/bill'
import modifyTaobaoCredit from '@/page/person/modifyTaobaoCredit'
import modifyTaobaoFeature from '@/page/person/modifyTaobaoFeature'
import certifyInfo from '@/page/person/certifyInfo'
import buyerReward from '@/page/person/buyerReward'
import sellerReward from '@/page/person/sellerReward'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      redirect: {name: 'home'},
    },
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/register',
      component: register,
      name: 'register'
    },
    {
      path: '/page',
      component: page,

      children: [
        {
          path: '/home',
          name: 'home',
          component: home,
        },

        {
          path: '/task',
          component: task
        },

        {
          path: '/person',
          component: person,
          redirect: {name: 'person-home'},
          children: [
            {
              path: 'withdraw',
              component: withdraw,
              name: 'withdraw'
            },
            {
              path: 'bill',
              component: bill,
              name: 'bill'
            },
            {
              path: 'add-bank-card',
              component: addBankCard,
              name: 'add-bank-card'
            },
            {
              path: 'buy-manager',
              component: buyManager,
              name: 'buy-manager'
            },
            {
              path: 'add-taobao-manager',
              component: addTaobaoManager,
              name: 'add-taobao-manager'
            },
            {
              path: 'add-jd-manager',
              component: addJDManager,
              name: 'add-jd-manager'
            },
            {
              path: 'home',
              component: personHome,
              name: 'person-home'
            },

            {
              path: 'recommend',
              component: recommend,
              name: 'recommend'
            },

            {
              path: 'service',
              component: service,
              name: 'service'
            },
            {
              path: 'info',
              component: info,
              name: 'info'
            },
            {
              path: 'forget-pwd',
              component: forgetPwd,
              name: 'forget-pwd'
            },
            {
              path: 'modify-login-pwd',
              component: modifyLoginPwd,
              name: 'modify-login-pwd'
            },
            {
              path: 'modify-qq',
              component: modifyQQ,
              name: 'modify-qq'
            },
            {
              path: 'modify-pay-pwd',
              component: modifyPayPwd,
              name: 'modify-pay-pwd'
            },
            {
              path: 'modify-taobao-credit',
              component: modifyTaobaoCredit,
              name: 'modify-taobao-credit'
            },
            {
              path: 'modify-taobao-feature',
              component: modifyTaobaoFeature,
              name: 'modify-taobao-feature'
            },
            {
              path: 'certify-info',
              component: certifyInfo,
              name: 'certify-info'
            },
            {
              path: 'buyer-reward',
              component: buyerReward,
              name: 'buyer-reward'
            },
            {
              path: 'seller-reward',
              component: sellerReward,
              name: 'seller-reward'
            }
          ]
        }
      ]
    }
  ]
})
