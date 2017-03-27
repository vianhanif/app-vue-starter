<style src="./style.scss"/>
<script src="./app.js"/>
<template>
  <div class="hello">
    <h1 v-on:click="reverseText" v-bind:title="time_message">{{ msg }} {{ name }}</h1>
    <input v-model="name"/>
    <h2>Essential Links</h2>
    <ul v-if="seen">
      <li v-for="link in links.essential">
        <a v-bind:href="link.href" target="_blank">{{link.text}} <slot></slot>    </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="link in links.ecosystem">
        <a v-bind:href="link.href" target="_blank">{{link.text}}<slot></slot></a>
      </li>
    </ul>
  </div>
</template>
