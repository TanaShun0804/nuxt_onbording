<template>
  <div class="container">
    <h2 class="page-title">ダッシュボードという名の自己紹介ページ</h2>
    <div v-if="!isLoading" class="introduce-group">
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
            <span v-if="skill.yearsOfExperience">
              ({{ skill.yearsOfExperience }})
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import MembersModule, { Member } from '../store/members'

@Component({})
export default class Index extends Vue {
  memberModule = getModule(MembersModule, this.$store)

  get member(): Member {
    return this.memberModule.member
  }

  get isLoading(): boolean {
    return this.memberModule.loading
  }

  get fullName(): string {
    return this.member.firstName + this.member.lastName
  }

  get birthOfDate() {
    return `${this.member.dobYear}年${this.member.dobMonth}月${this.member.dobDay}日`
  }

  get age() {
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
  }

  created() {
    this.memberModule.getList()
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .page-title {
    padding: 2rem 0;
  }
  .introduce-group {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 1px 0 rgba(161, 161, 161, 0.5);
    .introduce-row {
      display: flex;
      align-items: center;
      padding: 10px;
      margin: 10px;
      .introduce-column {
        width: 200px;
      }
      .introduce-content {
        max-width: 600px;
      }
    }
  }
}
</style>
