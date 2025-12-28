val logback_version: String by project

plugins {
    kotlin("jvm") version "2.1.0"
    id("io.ktor.plugin") version "3.2.3"
}

group = "io.github.lawseff"
version = "CURRENT-SNAPSHOT"

repositories {
    mavenCentral()
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
}

dependencies {
    implementation("io.ktor:ktor-server-core")
    implementation("io.ktor:ktor-server-jetty-jakarta")
    implementation("io.ktor:ktor-server-config-yaml")
    implementation("io.ktor:ktor-server-content-negotiation")
    implementation("io.ktor:ktor-serialization-jackson")
    implementation("io.ktor:ktor-server-swagger")
    implementation("ch.qos.logback:logback-classic:$logback_version")

    testImplementation(kotlin("test"))
    testImplementation("io.ktor:ktor-server-test-host")
}

// Otherwise, the gradlew build failing:
// "In plugin 'com.github.jengelman.gradle.plugins.shadow.ShadowBasePlugin' type
// 'com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar' property 'mainClassName' doesn't have a configured value."
project.setProperty("mainClassName", "io.github.lawseff.budget.Application")