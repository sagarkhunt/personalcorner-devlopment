import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { UserTypes } from "../types/user.types";
// import AdminLayout from "../Admin/common/AdminLayout";
import { ProtectedRoute } from "./ProtectedRoute";
// import HomeLayout from "../common/HomeLayout";
// import MarketPlaceLayout from "";
import Spinner from "react-bootstrap/Spinner";

const Login = lazy(() => import("../Pages/Login"));
const HomeLayout = lazy(() => import("../common/HomeLayout"));
const AdminLayout = lazy(() => import("../Admin/common/AdminLayout"));
const MarketPlaceLayout = lazy(() =>
  import("../Marketplace/common/MarketPlaceLayout"),
);
const ForgotPassword = lazy(() => import("../Pages/ForgotPassword"));
const VerifyEmail = lazy(() => import("../Pages/VerifyEmail"));
const ResetPassword = lazy(() => import("../Pages/ResetPassword"));
const PasswordResetSuccess = lazy(() =>
  import("../Pages/PasswordResetSuccess"),
);
const Logout = lazy(() => import("../Pages/Logout"));
const Signup = lazy(() => import("../Pages/Signup"));
const Home = lazy(() => import("../Pages/Home"));
const NFTListing = lazy(() => import("../Pages/NFTListing"));
const NFTDetail = lazy(() => import("../Pages/NFTDetail"));
const AboutUs = lazy(() => import("../Pages/AboutUs"));
const Events = lazy(() => import("../Pages/Events"));
const Event = lazy(() => import("../Pages/Event"));
const EventDetails = lazy(() => import("../Pages/EventDetails"));
const Details = lazy(() => import("../Pages/Details"));
const Marketplace = lazy(() => import("../Pages/Marketplace"));

// Admin pages
const AdminOverview = lazy(() => import("../Admin/AdminOverview"));
const MediaLibrary = lazy(() => import("../Admin/MediaLibrary"));
const ContentManagement = lazy(() => import("../Admin/ContentManagement"));
const Pages = lazy(() => import("../Admin/Pages"));
const UserScreen = lazy(() => import("../Admin/UserScreen"));
const AdminLogin = lazy(() => import("../Admin/AdminLogin"));
const AdminRegister = lazy(() => import("../Admin/AdminRegister"));
const Profile = lazy(() => import("../Admin/Profile"));
const AdminMenuManagement = lazy(() => import("../Admin/AdminMenuManagement"));
// New Admin pages
const GearCategory = lazy(() => import("../Admin/GearCategory"));
const AddGearCategory = lazy(() => import("../Admin/AddGearCategory"));
const GearOrder = lazy(() => import("../Admin/GearOrder"));
const AthleteGear = lazy(() => import("../Admin/AthleteGear"));
const AddNewGear = lazy(() => import("../Admin/AddNewGear"));
const AdminAddEvent = lazy(() => import("../Admin/AdminAddEvent"));
const AdminAllEvent = lazy(() => import("../Admin/AdminAllEvent"));
const AdminEventPackage = lazy(() => import("../Admin/AdminEventPackage"));
const AllCoupons = lazy(() => import("../Admin/AllCoupons"));
const AddNewCoupon = lazy(() => import("../Admin/AddNewCoupon"));
const AllRaffleTickets = lazy(() => import("../Admin/AllRaffleTickets"));
const AllRaffle = lazy(() => import("../Admin/AllRaffle"));
const AdminReviewAndRatings = lazy(() =>
  import("../Admin/AdminReviewAndRatings"),
);
const AddAttributes = lazy(() =>
  import("../Admin/NFTCollection/AddAttributes"),
);
const AddCategory = lazy(() => import("../Admin/NFTCollection/AddCategory"));
const Categories = lazy(() => import("../Admin/NFTCollection/Categories"));
const Orders = lazy(() => import("../Admin/NFTCollection/Orders"));
const NFTCollection = lazy(() =>
  import("../Admin/NFTCollection/NFTCollection"),
);
const AddNFTCollection = lazy(() =>
  import("../Admin/NFTCollection/AddNFTCollection"),
);
const AddNewUser = lazy(() => import("../Admin/AddNewUser"));

// ==== admin inbox ===
const AllNotification = lazy(() => import("../Admin/inbox/AllNotification"));

// Athlete pages
const Info = lazy(() => import("../Athlete/Info"));
const Gear = lazy(() => import("../Athlete/Gear"));
const Utilities = lazy(() => import("../Athlete/Utilities"));
const AthleteStats = lazy(() => import("../Athlete/AthleteStats"));
const SalesHistory = lazy(() => import("../Athlete/SalesHistory"));

// Marketplace pages
const MarketplaceMain = lazy(() => import("../Marketplace/MarketplaceMain"));
// const import MarketplaceInfo = lazy(() => import("../Marketplace/MarketplaceInfo"));
// const import MarketplaceDetails = lazy(() => import("../Marketplace/MarketplaceDetails"));
// const import MarketplaceStats = lazy(() => import("../Marketplace/MarketplaceStats"));
const MarketplaceInProcess = lazy(() =>
  import("../Marketplace/MarketplaceInProcess"),
);
const MarketplaceProcessed = lazy(() =>
  import("../Marketplace/MarketplaceProcessed"),
);

// Lineup pages
const PlayerLineUp = lazy(() => import("../Lineup/PlayerLineUp"));

// My Profile pages
const MyProfile = lazy(() => import("../Pages/MyProfile"));

const Offers = lazy(() => import("../Athlete/Offers"));
const Wallet = lazy(() => import("../wallet/Wallet"));
const ReviewAndRatings = lazy(() =>
  import("../review-support/ReviewAndRatings"),
);
// const import Support = lazy(() => import("../review-support/Support"));
const SupportForm = lazy(() => import("../Pages/SupportForm"));
const Collection = lazy(() => import("../nft-collection/Collection"));
const PccStore = lazy(() => import("../pcc-store/PccStore"));
const Setting = lazy(() => import("../setting/Setting"));
const CollectionDetail = lazy(() =>
  import("../nft-collection/CollectionDetail"),
);

// Inbox pages
const InboxTab = lazy(() => import("../Inbox/InboxTab"));
const AllInbox = lazy(() => import("../Inbox/AllInbox"));
const Notifications = lazy(() => import("../Inbox/Notifications"));
const Messages = lazy(() => import("../Inbox/Messages"));

// const import AdminSupport = lazy(() => import("../Admin/support/Support"));
const SendEmail = lazy(() => import("../Admin/inbox/SendEmail"));
const DeletedMails = lazy(() => import("../Admin/inbox/DeletedMails"));
const Draft = lazy(() => import("../Admin/inbox/Draft"));
const AdminSetting = lazy(() => import("../Admin/settings/AdminSetting"));
const CreatePassword = lazy(() => import("../Pages/createPassword"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/createPassword" element={<CreatePassword />} />
        <Route path="/VerifyEmail" element={<VerifyEmail />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route
          path="/PasswordResetSuccess"
          element={<PasswordResetSuccess />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeLayout />
            </ProtectedRoute>
          }>
          <Route path="/" element={<Home />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Route>

        <Route
          path="/marketplace"
          element={
            <ProtectedRoute
              roles={[UserTypes.SuperAdmin, UserTypes.Member, UserTypes.User]}
              allowedPublic={true}>
              <MarketPlaceLayout />
            </ProtectedRoute>
          }>
          <Route path=":id/info" element={<MarketplaceMain />} />
          {/* <Route path="marketplace" element={<Marketplace />} /> */}
        </Route>

        {/* Marketplace New pages */}
        {/* <Route path="/marketplace/:id/info" element={<MarketplaceMain />} /> */}
        {/* <Route path="/MarketplaceInfo" element={<MarketplaceInfo />} /> */}
        {/* <Route path="/MarketplaceDetails" element={<MarketplaceDetails />} /> */}
        {/* <Route path="/MarketplaceStats" element={<MarketplaceStats />} /> */}
        <Route
          path="/MarketplaceInProcess"
          element={<MarketplaceInProcess />}
        />
        <Route
          path="/MarketplaceProcessed"
          element={<MarketplaceProcessed />}
        />

        <Route path="/nfts" element={<NFTListing />} />
        <Route path="/nfts/:id" element={<NFTDetail />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/Details" element={<Details />} />

        {/* Admin pages */}

        <Route path="/MediaLibrary" element={<MediaLibrary />} />
        <Route path="/ContentManagement" element={<ContentManagement />} />
        <Route path="/Pages" element={<Pages />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={[UserTypes.SuperAdmin, UserTypes.Member]}>
              <AdminLayout />
            </ProtectedRoute>
          }>
          <Route path="dashboard" element={<AdminOverview />} />
          <Route path="users" element={<UserScreen />} />
          <Route
            path="users/create"
            element={
              <ProtectedRoute roles={[UserTypes.SuperAdmin]}>
                <AddNewUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="NFTCollection/NFTCollection"
            element={<NFTCollection />}
          />
          <Route
            path="NFTCollection/AddNFTCollection"
            element={
              <ProtectedRoute roles={[UserTypes.SuperAdmin]}>
                <AddNFTCollection />
              </ProtectedRoute>
            }
          />
          <Route path="AthleteGear" element={<AthleteGear />} />
          <Route path="GearCategory" element={<GearCategory />} />
          <Route
            path="AddGearCategory"
            element={
              <ProtectedRoute roles={[UserTypes.SuperAdmin]}>
                <AddGearCategory />
              </ProtectedRoute>
            }
          />
          <Route path="AddNewGear" element={<AddNewGear />} />
        </Route>

        <Route path="/AdminRegister" element={<AdminRegister />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AdminMenuManagement" element={<AdminMenuManagement />} />
        {/* New Admin pages */}
        {/* <Route path="/GearCategory" element={<GearCategory />} /> */}
        {/* <Route path="/AddGearCategory" element={<AddGearCategory />} /> */}
        <Route path="/GearOrder" element={<GearOrder />} />

        <Route path="/AdminAddEvent" element={<AdminAddEvent />} />
        <Route path="/AdminAllEvent" element={<AdminAllEvent />} />
        <Route path="/AdminEventPackage" element={<AdminEventPackage />} />
        <Route path="/AllCoupons" element={<AllCoupons />} />
        <Route path="/AddNewCoupon" element={<AddNewCoupon />} />
        <Route path="/AllRaffleTickets" element={<AllRaffleTickets />} />
        <Route path="/AllRaffle" element={<AllRaffle />} />
        <Route
          path="/AdminReviewAndRatings"
          element={<AdminReviewAndRatings />}
        />
        <Route
          path="/admin/NFTCollection/AddAttributes"
          element={<AddAttributes />}
        />
        <Route
          path="/admin/NFTCollection/AddCategory"
          element={<AddCategory />}
        />
        <Route
          path="/admin/NFTCollection/Categories"
          element={<Categories />}
        />
        <Route path="/admin/NFTCollection/Orders" element={<Orders />} />

        {/* === admin support ==== */}
        {/* <Route path="/admin/support" element={<AdminSupport />} /> */}
        {/* === admin inbox ==== */}
        <Route path="/admin/all-notification" element={<AllNotification />} />
        <Route path="/admin/send-email" element={<SendEmail />} />
        <Route path="/admin/deleted-mails" element={<DeletedMails />} />
        <Route path="/admin/draft" element={<Draft />} />
        {/* ====== admin setting ===== */}
        <Route path="/admin/settings" element={<AdminSetting />} />

        {/* Athlete pages */}
        <Route path="/Info" element={<Info />} />
        <Route path="/Gear" element={<Gear />} />
        <Route path="/Utilities" element={<Utilities />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/SalesHistory" element={<SalesHistory />} />
        <Route path="/Stats" element={<AthleteStats />} />

        {/* === wallet ==== */}
        <Route
          path="/wallet"
          element={
            <ProtectedRoute roles={[UserTypes.User]}>
              <Wallet />
            </ProtectedRoute>
          }
        />
        {/* === Lineup ==== */}
        <Route
          path="/PlayerLineUp"
          element={
            <ProtectedRoute roles={[UserTypes.User]}>
              <PlayerLineUp />
            </ProtectedRoute>
          }
        />

        {/* === Lineup ==== */}
        <Route
          path="/MyProfile"
          element={
            <ProtectedRoute roles={[UserTypes.User]}>
              <MyProfile />
            </ProtectedRoute>
          }
        />

        {/* === Review and Ratings ==== */}
        <Route path="/review-and-ratings" element={<ReviewAndRatings />} />
        {/* <Route path="/support" element={<support />} /> */}
        <Route path="/SupportForm" element={<SupportForm />} />

        {/* ===== Collection ====== */}
        <Route
          path="/my-collections"
          element={
            <ProtectedRoute roles={[UserTypes.User]}>
              <Collection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collection/detail"
          element={
            <ProtectedRoute roles={[UserTypes.User]}>
              <CollectionDetail />
            </ProtectedRoute>
          }
        />

        {/* ======= PccStore ======== */}
        <Route path="/pcc-store" element={<PccStore />} />

        {/* ======= Setting ======== */}
        <Route path="/settings" element={<Setting />} />

        {/* All Inbox pages */}
        <Route path="/InboxTab" element={<InboxTab />} />
        <Route path="/AllInbox" element={<AllInbox />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Messages" element={<Messages />} />
      </Routes>
    </Suspense>
  );
};

const PageLoader = () => {
  return (
    <div className="full-screen-loader">
      <div className="text-center w-100">
        <Spinner animation="border" className="me-2" />
      </div>
    </div>
  );
};

export default AllRoutes;
