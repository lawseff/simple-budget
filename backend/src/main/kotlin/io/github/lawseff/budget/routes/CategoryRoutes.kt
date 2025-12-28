package io.github.lawseff.budget.routes

import io.github.lawseff.budget.domain.category.CategoryType
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get

private data class CategoryResponse(val code: String, val type: CategoryType)

// mocks
private val categories = mapOf(
    CategoryType.INCOME to listOf("DIVIDENDS", "SALARY", "OTHER_INCOME"),
    CategoryType.SAVINGS to listOf("SAVINGS"),
    CategoryType.NEEDS to listOf(
        "GROCERIES", "HEALTH_AND_WELLBEING", "HOUSING_AND_UTILITIES", "OTHER_NEEDS", "TRANSPORTATION"
    ),
    CategoryType.WANTS to listOf(
        "CHARITY", "FUN_AND_TRAVEL", "OTHER_WANTS", "RESTAURANTS", "SHOPPING", "SUBSCRIPTIONS", "TAXI"
    )
)

fun Route.categoryRoutes() {

    /**
     * Gets the list of available categories.
     */
    get("/categories") {
        val response = categories.flatMap { category ->
            category.value.map { code -> CategoryResponse(code, category.key) }
        }
        call.respond(response)
    }
}
