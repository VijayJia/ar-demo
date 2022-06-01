import '@ar-js-org/ar.js'

function ArView() {
    return (
        <div>
            <div class="arjs-loader">
                <div>Loading, please wait...</div>
            </div>
            <a-scene
                vr-mode-ui="enabled: false;"
                renderer="logarithmicDepthBuffer: true; precision: medium;"
                embedded
                arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
            >
               {/* we use cors proxy to avoid cross-origin problems ATTENTION! you need to set up your server */}
                <a-nft
                    type="nft"
                    url="./assert/nft/trex/trex-image/trex"
                    smooth="true"
                    smoothCount="10"
                    smoothTolerance=".01"
                    smoothThreshold="5"
                >
                    <a-entity
                        gltf-model="./assert/nft/trex/scene.gltf"
                        scale="5 5 5"
                        position="150 300 -100"
                    >
                    </a-entity>
                </a-nft>
                <a-entity camera></a-entity>
            </a-scene>
        </div>

    );
}

export default ArView;