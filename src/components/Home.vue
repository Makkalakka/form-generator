<template>
  <div class="wrapper">
    <section class="section bg1">
      <!--<h1>Such Adorableness</h1>-->
    </section>
    <section class="section static">
      <h1>Svara på dessa frågor!</h1>
      <div
        v-for="(group, key) in userFields"
        :key="key"
        class="question-group">
        <div
          v-for="field in group"
          :key="field.lable">
          <b-form-select
            style="font-size: 1.2rem;"
            v-if="field.options"
            v-model="info[field.model]"
            :options="field.options"
            :multiple="field.multiple"
            :select-size="4"></b-form-select>
          <!-- valid-feedback="looks good" -->
          <b-form-group
            v-else
            :description="field.lable"
            :label-for="field.lable"
            :label="field.lable"
            :invalid-feedback="field.issue"
            :state="field.validator && validator[field.validator](info[field.model])"
            tooltip>
            <b-form-input
              v-model="info[field.model]"
              :placeholder="field.placeholder"
              :required="field.required"
              :maxlength="field.maxlength"></b-form-input>
          </b-form-group>
        </div>
      </div>
    </section>
    <!--<section class="section bg2">
    </section>-->
  </div>
</template>

<script>
import validator from 'validator';
import userFields from '../resources/userFields';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      validator,
      userFields,
      info: {
        personalNr: '',
        name: '',
        lastName: '',
        email: '',
        phoneNr: '',
        bankNr: '',
        clrNr: '',
        bank: '',
        adress: '',
        adress2: '',
        city: '',
        postalCode: '',
        country: '',
        salary: '',
        positions: [],
      },
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home{
  max-width: 800px;
  margin: auto;
  background-color: white;
  padding: 1rem;
}
.question-group{
  display: grid;
  grid-template-columns: 1fr minmax(0, 1fr);
  grid-gap: 20px;
}


.wrapper {
  /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
  // height: 100vh;
  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
  overflow: hidden;
  /* Enable scrolling on the page. */
  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
  perspective: 2px;

  /* display: grid;
  grid-template-columns: 1fr minmax(2fr, 800px) 1fr;
  grid-column-gap: 2rem;
  grid-template-areas: "leftimg questions rightimg"; */
}

/* The styling for the static div. */
.static {
  background: rgba(236, 236, 236, .7);
  max-width: 800px;
  margin: auto;
  padding: 1rem 1rem 0 1rem;
  margin: 2rem auto 2rem auto;
  border-radius: 6px;
}

/* Sets the actual background images to adorable kitties. This part is crucial. */
.bg1 {
  /* Full height */
  height: 100%;
}
.bg1::after {
  background-image: url('https://picsum.photos/1600/1080');
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Display and position the pseudo-element */
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Move the pseudo-element back away from the camera,
   * then scale it back up to fill the viewport.
   * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
  transform: translateZ(-5px) scale(4);
  /* Force the background image to fill the whole element. */
  // background-size: 100%;
  /* Keep the image from overlapping sibling elements. */
  z-index: -1;
}
</style>
