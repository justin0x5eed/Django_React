from django.contrib import admin

from .models import Article, ArticleCategory


@admin.register(ArticleCategory)
class ArticleCategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("name",)


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("id", "category", "owner", "created_at", "updated_at")
    list_filter = ("category", "owner")
    search_fields = ("content",)
    autocomplete_fields = ("category", "owner")
    ordering = ("-created_at",)
