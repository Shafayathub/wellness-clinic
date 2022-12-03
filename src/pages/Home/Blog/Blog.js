import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-800 text-yellow-500">
      <div className="flex justify-center items-center flex-wrap mx-10 lg:mx-72 pb-10">
        <div>
          <h2 className="text-2xl font-bold text-jcenter mt-10 mb-2">Blogs</h2>
          <hr />
          <div className="mt-5 border border-yellow-600 rounded-xl p-5">
            <h3 className="mb-3 text-lg font-medium">
              Difference between Authentication and Authorization
            </h3>

            <p className="text-justify">
              Both Authentication and Authorization area units are utilized in
              respect of knowledge security that permits the safety of an
              automatic data system. Each area unit terribly crucial topics
              usually related to the online as key items of its service
              infrastructure. However, each of the terms area units is
              completely different with altogether different ideas. whereas
              indeed, they're usually employed in an equivalent context with an
              equivalent tool, they're utterly distinct from one another. In the
              authentication process, the identity of users is checked for
              providing the access to the system. While in the authorization
              process, a person's or user's authorities are checked for
              accessing the resources. Authentication is done before the
              authorization process, whereas the authorization process is done
              after the authentication process.
            </p>
          </div>

          <div className="m-5 border border-yellow-600  rounded-xl p-5">
            <h3 className="mb-3 text-xl font-medium">
              Why am I using firebase? What are the other options?
            </h3>

            <p className="text-justify">
              I am using firebase for a few reasons, but the first reason is
              it's free for a certain level services and it's from a tech giant
              The Google. Then I have resources there with proper documentation
              that's so much beginner friendly and last but not the least
              Programming hero teach us to use this.
              <br />
              Other options are available there. <br />
              like:
              <ul>
                <li>Auth0</li>
                <li>Ory</li>
                <li>Supabase</li>
                <li>Okta</li>
                <li>PingIdentity</li>
                <li>Keycloak</li>
                <li>Frontegg</li>
                <li>Authress</li>
                <li>Cognito</li>
                <li>OneLogin</li>
                <li>Amazon</li>
              </ul>
              And so on...
            </p>
          </div>
          <div className="m-5 border border-yellow-600  rounded-xl p-5">
            <h3 className="mb-3 text-xl font-medium">
              What Other services firebase provides other than authentication?
            </h3>

            <p className="text-justify">
              Firebase is an app development platform that helps you build and
              grow apps and games users love. Backed by Google and trusted by
              millions of businesses around the world.
              <br />
              <br />
              Services:
              <ul>
                <li>Firebase Realtime Database</li>
                <li>Firebase Remote Config</li>
                <li>Firebase Extensions BETA</li>
                <li>App Check</li>
                <li>Cloud Functions for Firebase</li>
                <li>Firebase Cloud Messaging</li>
                <li>Firebase Hosting</li>
                <li>Cloud Storage for Firebase</li>
                <li>Firebase Machine Learning BETA</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
