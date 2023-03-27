import moment from "moment";
import {
  iconCompany,
  iconLocation,
  iconTwitter,
  iconWebsite,
} from "../../assets";
import { motion } from "framer-motion";

const UserInfo = ({ userData }) => {
  return (
    <div className="mt-6 p-8 md:p-5 bg-white rounded-2xl shadow-xl dark:bg-[#182239] w-full">
      <div className="flex items-start gap-5">
        <motion.img
          layout
          src={userData.avatar_url}
          alt="avatar"
          className="w-28 h-28 object-cover rounded-full"
        />
        <div className="flex justify-between gap-20 w-full md:flex-col md:gap-1">
          <div className="flex flex-col">
            <motion.h1
              layout
              className="text-[#182239] font-bold text-2xl dark:text-white md:text-lg"
            >
              {userData.name}
            </motion.h1>
            <motion.a
              layout
              href={`https://github.com/${userData.login}`}
              className="decoration-0 text-[#0079ff]"
              target="_blank"
            >
              {"@" + userData.login}
            </motion.a>
          </div>

          <motion.h2
            layout
            className="text-[#4b6a9b] md:text-sm dark:text-white m-0"
          >
            {userData.created_at &&
              "Joined " + moment(userData.created_at).format("DD MMM YYYY")}
          </motion.h2>
        </div>
      </div>

      <div className="w-full">
        <div className="ml-32 md:ml-0">
          <motion.p
            layout
            className="text-[#4b6a9b]  mt-[0.6rem] md:text-sm dark:text-white"
          >
            {userData.bio ? userData.bio : "No bio available"}
          </motion.p>

          <div className="flex justify-between items-center mt-4 p-4 rounded-lg bg-[#f6f8ff] dark:bg-[#141D2F]">
            <div className="flex flex-col md:items-center">
              <motion.h3 layout className="text-[#4b6a9b] dark:text-white">
                Repos
              </motion.h3>
              <motion.h4
                layout
                className="text-[#2b3442] mt-3 font-bold text-xl dark:text-white"
              >
                {userData.public_repos}
              </motion.h4>
            </div>

            <div className="flex flex-col md:items-center">
              <motion.h3 layout className="text-[#4b6a9b] dark:text-white">
                Followers
              </motion.h3>
              <motion.h4
                layout
                className="text-[#2b3442] mt-3 font-bold text-xl dark:text-white"
              >
                {userData.followers}
              </motion.h4>
            </div>

            <div className="flex flex-col md:items-center">
              <motion.h3 layout className="text-[#4b6a9b] dark:text-white">
                Following
              </motion.h3>
              <motion.h4
                layout
                className="text-[#2b3442] mt-3 font-bold text-xl dark:text-white"
              >
                {userData.following}
              </motion.h4>
            </div>
          </div>

          <div className="flex justify-between items-start gap-4 mt-6 md:flex-col md:gap-4">
            <div className="flex flex-col gap-8 md:gap-4 w-full">
              <div className="flex items-center gap-5">
                <motion.img
                  layout
                  src={iconLocation}
                  className="w-[18px] h-full object-cover dark:brightness-[1000%]"
                  alt="location"
                />
                <motion.h4 layout className="text-[#4b6a9b] dark:text-white">
                  {userData.location}
                </motion.h4>
              </div>

              <div className="flex items-center gap-5">
                <motion.img
                  layout
                  src={iconTwitter}
                  className="w-[18px] h-full object-cover dark:brightness-[1000%]"
                  alt="twitter"
                />
                <motion.a
                  layout
                  className="text-[#4b6a9b] decoration-0 dark:text-white"
                  href={`https://twitter.com/${userData.twitter_username}`}
                  target="_blank"
                >
                  {userData.twitter_username
                    ? userData.twitter_username
                    : "No twitter available"}
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col  gap-8 md:gap-4 w-full">
              <div className="flex items-center gap-5">
                <motion.img
                  layout
                  src={iconCompany}
                  className="w-[18px] h-full object-cover dark:brightness-[1000%]"
                  alt="Company"
                />
                <motion.h4 layout className="text-[#4b6a9b] dark:text-white">
                  {userData.company ? userData.company : "No company available"}
                </motion.h4>
              </div>
              <div className="flex items-center gap-5">
                <motion.img
                  layout
                  src={iconWebsite}
                  className="w-[18px] h-full object-cover dark:brightness-[1000%]"
                  alt="website"
                />
                <motion.a
                  layout
                  className="text-[#4b6a9b] dark:text-white"
                  href={userData.blog}
                  target="_blank"
                >
                  {userData.blog ? userData.blog : "No website available"}
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
