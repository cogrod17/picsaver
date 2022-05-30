from rest_framework.routers import DefaultRouter
from .views import PostView

router = DefaultRouter()
router.register('', PostView, basename='posts' )
urlpatterns = router.urls