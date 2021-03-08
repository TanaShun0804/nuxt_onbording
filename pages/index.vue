<template>
  <div v-if="!loading" class="container">
    <!-- <h2>ダッシュボードという名の自己紹介ページ</h2> -->
    <div class="introduce-group">
      <div class="introduce-row">
        <div class="introduce-column">名前</div>
        <div class="introduce-content">
          <p>{{ fullName }} ({{ member.nickname }})</p>
        </div>
      </div>
      <div class="introduce-row">
        <div class="introduce-column">自己紹介</div>
        <div class="introduce-content">
          <p>
            {{ member.description }}
          </p>
        </div>
      </div>
      <div class="introduce-row">
        <div class="introduce-column">生年月日</div>
        <div class="introduce-content">
          <p>{{ birthOfDate }}({{ age }}歳)</p>
        </div>
      </div>
      <div class="introduce-row">
        <div class="introduce-column">地元</div>
        <div class="introduce-content">
          <p>{{ member.locationDetail }}</p>
        </div>
      </div>
      <div class="introduce-row">
        <div class="introduce-column">家族構成</div>
        <div class="introduce-content">
          <p v-for="family in member.families" :key="family.id">
            {{ family.relation }}
          </p>
        </div>
      </div>
      <div class="introduce-row">
        <div class="introduce-column">趣味</div>
        <div class="introduce-content">
          <p v-for="hobby in member.hobbies" :key="hobby.id">
            {{ hobby.name }}
            <span v-if="hobby.description">({{ hobby.description }})</span>
          </p>
        </div>
      </div>
      <div class="introduce-row">
        <div class="introduce-column">技術</div>
        <div class="introduce-content">
          <p v-for="skill in member.skills" :key="skill.id">
            {{ skill.name }}
            <span v-if="skill.yearsOfExperience"
              >({{ skill.yearsOfExperience }})</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      member: 'members/memberForDashBoard',
      loading: 'members/memberLoading',
    }),
    fullName() {
      return this.member.firstName + this.member.lastName
    },
    birthOfDate() {
      return `${this.member.dobYear}年${this.member.dobMonth}月${this.member.dobDay}日`
    },
    age() {
      const birthDate = new Date(
        this.member.dobYear,
        this.member.dobMonth - 1,
        this.member.dobDay
      )
      const today = new Date()
      const thisYearBirthDate = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
      )
      const diff = today.getFullYear() - birthDate.getFullYear()
      const age = today < thisYearBirthDate ? diff - 1 : diff
      return age
    },
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapActions({
      getList: 'members/getList',
    }),
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.introduce-group {
  display: flex;
  flex-direction: column;
  .introduce-row {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px;
    .introduce-column {
      width: 200px;
    }
    .introduce-content {
      max-width: 400px;
    }
  }
}
</style>
